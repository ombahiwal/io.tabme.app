import React, { Component} from 'react';
// Redux
// import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import Store from './redux/Store';
// import history from './history';
import ReactGA from 'react-ga';
import AppInner from './AppInner';
// import Cookies from 'universal-cookie';
// import DataService from './services/data-service';
// var Actions = require('./redux/actions/index');
// const cookies = new Cookies();
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter:0,
      state : false,
      locale:'de-de'
    };
    // console.log(props.restaurant)
    ReactGA.initialize('UA-90856241-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
 
  // componentDidUpdate(prevProps, prevState, snapshot) { 
  // }
render() {
  return (
    <Provider store={Store}>
      <AppInner/>
     </Provider> 
    );
  }
}

// const mapStateToProps = state => {
//   return {
//           restaurant:state.restaurant,
//         }
// }
// const mapDispatchToProps = dispatch =>{
//   return {  
//     updateCartInStore: (cart) => dispatch(Actions.updateCart(cart)),
//     setTableNumber:(tnum)=>dispatch(Actions.setTableNumber(tnum)),
//     setRestaurant:(gastro)=>dispatch(Actions.setRestaurant(gastro)),
//     setMenu:(menu)=>dispatch(Actions.setMenu(menu))
//   }
// }

// export default AppInner;

export default App;