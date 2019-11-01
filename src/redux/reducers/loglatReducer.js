const loglatReducer = (state={
    log:"",
    lat:""
},action)=>{
    switch (action.type){
        case "SET_LOG":
            state = {
                ...state,
                log:action.log
            };
            break;
        case "SET_LAT":
                state = {
                    ...state,
                    lat:action.lat
                };
                break;
    }
    return state;
};
export default loglatReducer;