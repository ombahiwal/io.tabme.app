import React, { Component } from 'react';
// Components
import DefaultPage from './components/defaultPage';
// import Menu from './components/MenuComponentv5';
import Cart from './components/CartComponent';
import Heading from './components/HeaderComponent';
import QRCodeReader from './components/QRReaderComponent';
import UserLogin from './components/LoginComponent';
import Home from './components/HomeComponent';
import Register from './components/RegisterComponent';
import RestaurantWelcome from './components/RestaurantWelcomeComponent';
import Scanned from './components/scannedInterComp';
import Pickup from './components/pickupInterComp';
import Delivery from './components/deliveryInterComp';
import Checkin from './components/CheckinComponent';
import CurrentOrder from './components/CurrentOrderComponent';
import OrderInfo from './components/OrderComponent';
import RestaurantPickup from './components/RestaurantPickupComponent';
import RestaurantDelivery from './components/RestaurantDeliveryComponent';
import MenuRedirect from './components/menuInterComp';
import RestaurantCustomQR from './components/RestaurantCustomQrComponent';
import DataService from './services/data-service';
import Cookies from 'universal-cookie';

// Paypal
// import PaypalCheckout from './components/PaypalCheckoutComponent';

// Stripe 
import StripeCheckout from './components/StripeCheckout';

// Razor Pay
import RazorPayDialog from './components/RazorPayCheckoutComponent';

//  Test Components
import CheckoutExternal from './components/CashExternalComponent';
import Menu6 from './components/MenuComponentv6';
import SimpleMapView from './components/SimpleMapViewComponent';
import WebShop from './components/WebShop/WebShop';
// QR Code
// import QRCodeDisplay from "react-qr-code";
// Redux

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import history from './history';
import { I18nProvider} from "./i18n/index";
// import i18n from "./i18n";

// Language Locale
import {connect} from 'react-redux';
import {countryToLocales} from './components/shared/CurrencyFromCode'
import LoadingOverlay from 'react-loading-overlay';

var Actions = require('./redux/actions/index');
const cookies = new Cookies();
class AppInner extends Component{

  constructor(props){
    super(props);
    this.state = {
      counter:0,
      state : false,
      locale:'de-de',
      loading:true,
    };

    // console.log(props.restaurant)
    // ReactGA.initialize('UA-90856241-1');
    // ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevProps.restaurant, this.props);
        try{
          if(prevProps.restaurant.country !== this.props.restaurant.country)
            this.setState({locale:countryToLocales(this.props.restaurant.country)});
        }catch(e){}
  }
  componentDidMount(){
    // set cookies state of the app on reload.
        console.log('Cookies->', cookies.get('gastro'), cookies.get('menu'), cookies.get('table_num'));
        var cookies_restaurant = cookies.get('gastro');
        if(cookies_restaurant){
          var id = cookies_restaurant.alias;
          setTimeout(async ()=>{
           await DataService.getQRInfo({id: id.match(/^[0-9a-fA-F]{24}$/) ? id : "" , alias:id}).then((res)=>{
              var qr = res.data;
              console.log(res)
              if(res){ 
                      if(res.data.success){
                        this.props.setRestaurant(qr.gastro);
                        this.props.setMenu(res.data.menu);
                        if(cookies.get('cart')){
                          this.props.updateCartInStore(cookies.get('cart'));
                        }
                        
                        this.props.setTableNumber(cookies.get('table_num'));
                          this.setState({loading:false});
                      }else{
                          // setLoading(false);
                          this.setState({loading:false});
                      }
                  }
              });
          },0)
      
          }else{
            this.setState({loading:false});
          }
  }

pageDefault(){
  return <DefaultPage/>;
}

pageHome() {
  return <Home/>;
}
pageCart(){
  return <Cart/>;
}
pageLogin(){
  return <UserLogin history={history}/>;
}
pageRegister(){
  return <Register/>;
}
pageRestaurantWelcome(){
  return <RestaurantWelcome table_number="12"/>;
}

render() {
      return (
  <Router>
    <LoadingOverlay
      active={this.state.loading}
      spinner
      fadeSpeed={200}
      text='Loading...'
      >
      <div style={{display:this.state.loading ? 'block':'none'}} className="loading-div2"></div>
    </LoadingOverlay>
  {!this.state.loading && <I18nProvider locale={this.state.locale}>
    {/* <Heading history={history}/> */}
    <div className="main-body">
      
     {/* <Tabs/> */}
    <div className="container fillup">
      <Switch>
        <Route path="/welcome">
            {this.pageRestaurantWelcome}
        </Route>
      <Route path="/register">
            {this.pageRegister}
        </Route>
        <Route path="/login">
            {this.pageLogin}
        </Route>
      {/* <Route path="/qr">
            <QRCodeDisplay value="TABME"/>
        </Route> */}
        <Route path="/scan">
            <QRCodeReader/>
        </Route>
          <Route path="/webshop">
            <WebShop/>
          </Route>

          <Route path="/menu6">
            <Menu6 />
          </Route>

          <Route path="/home">
          {/* <Suspense fallback={<h6>Loading Suspense...</h6>}> */}
            {this.pageHome()}
            {/* </Suspense> */}
          </Route>

          <Route path="/map">
            <SimpleMapView/>
          </Route>
          <Route path="/cart">
            {this.pageCart()}
          </Route>

          <Route path="/stripe/:session_id" component={StripeCheckout}/>
          <Route path="/stripe">
            <StripeCheckout history={history}/>
            </Route>
            {/* <Route path="/paypal/:session_id" component={PaypalCheckout}/>
            <Route path="/paypal">
               <PaypalCheckout history={history}/> 
            </Route> */}

          {/* <Route path="/checkout">
            <Checkout/>
          </Route> */}

          <Route path="/razorpay">
            <RazorPayDialog/>
          </Route>

          <Route path="/external">
            <CheckoutExternal/>
          </Route>
          <Route path="/checkin">
            <Checkin/>
          </Route>
          <Route path="/order/current">
          <CurrentOrder/>

          </Route>
          <Route path="/r/pickup">
            <RestaurantPickup/>
          </Route>
          <Route path="/r/delivery">
            <RestaurantDelivery/>
          </Route>
          <Route path="/r/custom">
              <RestaurantCustomQR/>
          </Route>
          

          <Route path="/order/:id" component={OrderInfo}/>
          <Route path="/pickup/:id" component={Pickup}/>
          <Route path="/delivery/:id" component={Delivery}/>
          <Route path="/m/:id" component={MenuRedirect}/>
          <Route path="/:id" component={Scanned}/>
          <Route path="/r/:id" component={Scanned}/>
          <Route path="/">
            {this.pageDefault}
        </Route>
      </Switch>
    </div>
          </div>
          {/* <CountContainer/> */}
          </I18nProvider>}
    </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
          restaurant:state.restaurant,
          cart:state.cart,
        }
}
const mapDispatchToProps = dispatch =>{
  return {
    updateCartInStore: (cart) => dispatch(Actions.updateCart(cart)),
    setTableNumber:(tnum)=>dispatch(Actions.setTableNumber(tnum)),
    setRestaurant:(gastro)=>dispatch(Actions.setRestaurant(gastro)),
    setMenu:(menu)=>dispatch(Actions.setMenu(menu)),
  }
}

// export default AppInner;

export default connect(
    mapStateToProps,
     mapDispatchToProps
)(AppInner);