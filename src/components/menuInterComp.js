import React, { useEffect, useState} from 'react';
import { Redirect} from "react-router-dom";
// import Button from 'react-rainbow-components';
import LoadingOverlay from 'react-loading-overlay';
import DataService from '../services/data-service';
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'universal-cookie';
import t from '../i18n/translate';
const cookies = new Cookies();
const Actions  = require('../redux/actions/index');

// const flag = false;
function Process(subprop){
    // console.log(subprop);
    const loading = true;
    const [qr, setQr] = useState(false);
    const id = subprop.id;  
    const user = useSelector(state => state.user);
    /*
    Send - QR ID 
    Receive - Object with Restaurant Obj, 
    Set Store
    - restaurant:gastro
    - tableNum: tableNum
    */
   useEffect(()=>{
       async function fetchData(){
        await DataService.getQRInfo({id:id, alias:id}).then((res)=>{
            console.log(res.data);
            setQr(res.data);
            });
       }
       fetchData();
          // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);
   
    const dispatch = useDispatch();
    if(!qr){
        return(
            <LoadingOverlay
            active={true}
            spinner
            text='Loading...'>
            <div className="loading-div">
            </div>
            </LoadingOverlay>
        );
    }else{
        if(qr.success){
            // Set User if already Logged
            try{
                var u = cookies.get('user');
                if(user.email === null && u !== undefined){
                    dispatch(Actions.setUserSession(u));
                    // console.log('User set', u);
                }else{
                    // console.log('User not Logged!');
                }
            }catch(e){
                // console.log('Some Error related to User Login happened');
            }
            dispatch(Actions.setTableNumber(parseInt(qr.table_number)));
            dispatch(Actions.setRestaurant(qr.gastro));
            dispatch(Actions.setMenu(qr.menu));
            cookies.remove('menu', {path:'/'});
            cookies.remove('gastro', {path:'/'});
            cookies.remove('cart', {path:'/'});
            var newCart = Object({dishes:[],
                itemCount:0,
                cartTotal:0,
                taxlabel:"included",
                taxpercent:0,
                tax:0,
                delivery_fee:0,
                discountpercent:0,
                promo:0,
                tip:0,
                currency:'',
                totalCost:0,
                notes:"",
                promo_data:null,
                tax_data:null,
                pickup_date:null,
                order_label:null});
            dispatch(Actions.updateCart(newCart));
            cookies.set('cart',newCart, {path:'/'});
            cookies.set('table_num', parseInt(qr.table_number), {path:'/'});
            cookies.set('gastro', qr.gastro, {path:'/'});
        }else
        return(<center><b>{t('restaurant_not_found')}</b></center>);
    }

    return (
        <LoadingOverlay
        active={loading}
        spinner
        text='Loading...'
        >
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                <div className="loading-div">
                {loading && <Redirect to='/menu6'/>}.asda
                </div>
                </div>    
            </div>
        </div>
        </LoadingOverlay>
    );
}

function MenuRedirect(props){
    return <Process id={props.match.params.id}/>
}

export default MenuRedirect;

