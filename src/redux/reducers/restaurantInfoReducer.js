const restaurantInfo = (info={rname:".", _id:"test"}, action) => {
    switch(action.type){
        case 'SET_RESTAURANT':
            return action.payload;

        default:
            return info;
    }
}

export default restaurantInfo;