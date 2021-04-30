const restaurantInfo = (info={rname:".", _id:"test", 
    payment_methods:['cash'],
    info:{
    paypal_client_id:"",
    delivery:{
        delivery_msg:" ",
        delivery_fee:0.00,
        delivery_time:25,
        delivery_open:true
    },
    pickup:{
        pickup_msg:"",
        pickup_address:"",
        pickup_time:25,
        pickup_open:true
    },
    table:{
        table_open:true,
        table_msg:" ",
        table_time:25, 
        table_count:20,
    }
}}, action) => {
    switch(action.type){
        case 'SET_RESTAURANT':
            return action.payload;

        default:
            return info;
    }
}

export default restaurantInfo;