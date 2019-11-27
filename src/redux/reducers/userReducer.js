const userReducer = (state={
    name:":jeckson",
    age:23
},action)=>{
    // if(action.type==="SETNAME"){
    //     state = {
    //         name:action.payload
    //     };
    // }
    switch (action.type){
        case "SETNAME":
            state = {
                ...state,
                name:action.payload
            };
            break;
        case "SETAGE":
                state = {
                    ...state,
                    age:action.payload
                };
                break;
        // default:return null;
    }
    return state;
};
export default userReducer;