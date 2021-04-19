import React, {useEffect, useState} from 'react';
import { Redirect} from "react-router-dom";
import {Button} from 'react-bootstrap';
import LoadingOverlay from 'react-loading-overlay';
import DataService from '../services/data-service';
// import { useDispatch, useSelector } from "react-redux";
// import Cookies from 'universal-cookie';
// import {Link} from 'react-router-dom';
import CurrencySymbol from './CurrencySymbolComponent';
import CDCard from './shared/CartDishCard'
import OrderStatusImage from './shared/OrderStatusImage';
import t from '../i18n/translate';
// import { FormattedMessage } from 'react-intl';
import TnC from './shared/TnCFoot';
const ENV = require('../services/env-vars');
// const cookies = new Cookies();
// const Actions  = require('../redux/actions/index');

// Test Order ID function
// function get_values_from_id(result){

//     if (result) {
//         var id          = result, ctr = 0;
//         var timestamp   = parseInt(id.slice(ctr, (ctr+=8)), 16);
//         var machineID   = parseInt(id.slice(ctr, (ctr+=6)), 16);
//         var processID   = parseInt(id.slice(ctr, (ctr+=4)), 16);
//         var counter     = parseInt(id.slice(ctr, (ctr+=6)), 16);
//         // console.log(id);
//         // console.log(timestamp);
//         // console.log(machineID);
//         // console.log(processID);
//         // console.log(counter);                    
        
//     } 

// }


// const flag = false;
function renderCartDishCard(dish, currency){
    var rem = false;
    // console.log('Cart Dish',dish);
  
    return(
       <div key={dish.dish_id}>
       {dish.optionSets.map((optsobj, idx)=>{
        return(<CDCard optionobj={optsobj} cartdish={dish} remove={rem} key={idx} optidx={idx} currency={currency}/>)
        })}
       </div>
    );   
}


function renderDishes(order){
    // var count;
    // console.log(order.cart.currency);
        if(order.cart.dishes.length>0){
            // count = 0;
            return( <div>{order.cart.dishes.map((cartdish)=>{
                // count +=1;
                return(
                    <div key={cartdish.dish_id}>
                    {renderCartDishCard(cartdish, order.cart.currency)}
                    </div>
                );
            })} </div>);
        }else{
            return (
                <div className="col-12">
                <center>
                 No Items!<br/>
                </center>
                </div>
               );
        }
}


function Process(subprop){
    const [loading, setLoading] = useState(true);
    // const [qr, setQr] = useState(false);
    // const [state, setState] = useState(0);
    // const [alertParams, setAlertParams]  = useState({show:false, text:'', variant:'' });
    const [redirect, setRedirect] = useState(false);
    const [dt, setDt] = useState('N/A');
    const id = subprop.id;  
    // const user = useSelector(state => state.user);
    // var [pickup, setPickup] = useState({status:false, estimate:0, msg:""});
    // var [delivery, setDelivery] = useState({status:false, estimate:0, msg:""});
    // var delivery;
    var [order, setOrder] = useState("");
    // var [newOrder, setNewOrder] = useState({});
    // const dispatch = useDispatch();
  

    useEffect(()=>{
       
        setTimeout(async ()=>{
            try{
                
                var newOrder = await DataService.fetchOrder({order_id:id});

                // console.log(order);
                if(!newOrder.data.success){
                    setRedirect(true);
                }
                setOrder(newOrder.data.order);
                if(order === undefined)
                    setRedirect(true);
                else{
                    // var pickup, delivery;
                    // switch(parseInt(order.tablenum)){
                    //     case -1:
                    //         pickup = {status:true, msg:"hello", estimate:"30"};
                    //         // setPickup({status:true, msg:"hello", estimate:"30" });
                    //         // console.log(pickup, order.pickup_time);
                    //     break;
                    //     case -2:
                    //     // Delivery Orange Color    
                    //         delivery = {status:true, msg:"hello", estimate:"30"};
                    //         // setDelivery({status:true, msg:"hello", estimate:"30"});
                    //     break;
                    //     default:
                    //   }
                    setLoading(false);
                    var dt_order = new Date(newOrder.data.order.createdAt);
                    //   var at_label = "";
                    // var at = <FormattedMessage id='label_at'>{(label)=>{console.log(label); at_label = label}}</FormattedMessage>;
                    // console.log(at_label);
                    dt_order = ('0'+(dt_order.getMonth()+1)).slice(-2)+ '/'+ ('0'+dt_order.getDate()).slice(-2)+'/'+dt_order.getFullYear()+' at '+('0'+dt_order.getHours()).slice(-2)+":"+('0'+dt_order.getMinutes()).slice(-2);
                    setDt(dt_order);
                    // console.log(newOrder.data.order.open);
                    // if(newOrder.data.order.open){
                    //     setAlertParams({show:true, text:'This Order is Currently Open.', variant:'warning' }); 
                    // }else if(!newOrder.data.order.isComplete){
                    //     // Cancelled by restaurant
                    //     setAlertParams({show:true, text:'The Order was Cancelled or Not Completed.', variant:'info' });
                    // }
                    // if(newOrder.data.order.isComplete){
                    //     // Complete and closed
                    //     setAlertParams({show:true, text:'The Order is Complete!', variant:'success' });
                    // }
                }
    
            }catch(e){
                
            }

        },0);
        
     
    },[id, order]);

    return (
        <LoadingOverlay
        active={loading}
        spinner
        text='Fetching Order Details...'
        >
        <div className="col-12">
            <div className="row">
            {redirect && <Redirect to="/home"/>}
            </div>
        </div>
        {!redirect && !loading &&
        <div className="col-12 ">
            <div className="row">
            
                <div className="col-12 background-white">
                    <center><h4><b>{t('order_past_head')}</b></h4></center>
                </div>
                {/* <hr/> */}
                
            </div>
            {/* <hr/> */}
            <br/>
            <div className="row">
                <div className="col-12 background-white">
                    <center>
                        {/* <Image src={`https://s3.eu-west-2.amazonaws.com/tabme.info/user_public_assets/${order.gastro_id}.png`}/>     */}
                        <OrderStatusImage order={order}/>
                        <br/>
                        <h5><b>{order.rname}</b></h5>                        
                       
                    </center>
                    <hr/>
                </div>
            </div>
            
            {/* <div className="row m-2">
            <div className="col-12">
            <center>
                <h4><b>Order Info.</b></h4>
                {alertParams.show &&  <Alert variant={alertParams.variant}><b>{alertParams.text}</b></Alert>}
            </center>
            
            </div>
            </div>  */}

            <div className="row m-3">
            <div className="col-12">
            
                {renderDishes(order)}
                
            </div>
            </div> 
            
            
            <div className="row">
                <div className="col-12  background-white">
                <hr/>
            <div className="row">
            <div className="col-5"> 
            <small><b>{t('order_status')}</b></small>
            </div>
            <div className="col-7 d-flex"> 
            <div className="ml-auto"><h5><b>{t(order.status)}</b></h5></div> 
            </div>
            </div>

            <div className="row">
            <div className="col-5"> 
            <small><b>{t('order_total')}</b>  </small>
            </div>
            <div className="col-7 d-flex"> 
            <div className="ml-auto"><CurrencySymbol currency={order.cart.currency}/> {order.cart.totalCost.toFixed(2)}</div> 
            </div>
            </div>
            
            
            <div className="row">
            <div className="col-5"> 
            <small> <b>{t('order_id')}</b></small>
            </div>
            <div className="col-7 d-flex"> 
            <div className="ml-auto"><small>{order._id.slice(18, 24).toUpperCase()}
            
            </small></div> 
            </div>
            </div>


            <div className="row">
            <div className="col-5"> 
            <small><b>{t('order_time_placed')}</b></small>
            </div>
            <div className="col-7 d-flex"> 
            <div className="ml-auto"><small>{dt}</small></div> 
            </div>
            </div>


            {/* <div className="row">
            <div className="col-5"> 
                <b>Payment ID :</b>
            </div>
            <div className="col-7 d-flex"> 
            <div className="ml-auto"><small>{order.paymentInfo}</small></div> 
            </div>
            </div>
            <br/> */}


             {/* <div className="row">
            <div className="col-5"> 
                <b>Total Items :</b>
            </div>
            <div className="col-7 d-flex"> 
            <div className="ml-auto">{order.cart.itemCount}</div> 
            </div>
            </div>
            <br/> */}
            
            
            {!order.open &&
            <div className="row">
            <div className="col-7"> 
            <br/>
            <a target="_blank" rel="noopener noreferrer" href={`${ENV.CDN_URL}/user_invoices/${order._id}.pdf`}>
            <Button variant="outline-dark" size="small" >
                <b>{t('order_receipt_btn')}</b>
            </Button>
            </a>
            {/* <a target="_blank" href=></a> */}
            </div>
            <div className="col-5 d-flex"> 
            <div className="ml-auto"><small></small></div> 
            </div>
            </div>
            }
    
            <hr/>

            <div className="row">
            <div className="col-12"> 
                <small>{t('order_bottom_msg')}</small>

                <br/>
                <span>
      <TnC/>
    </span>
            </div>
            </div>

            </div>
            </div>
            
        </div>}
        </LoadingOverlay>
    );
}

function OrderInfo(props){
    return <Process  id={props.match.params.id}/>
}

export default OrderInfo;