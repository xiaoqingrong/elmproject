const mathReducer = (state={
    result:1,
    lastValues:[],
},action)=>{ 
    switch (action.type){
        case "ADD":
            state = {
                ...state,
                result:state.result + action.payload,        //new
                lastValues:[...state.lastValues,action.payload]
            };
            break;
        case "SUBTRACT":
                state = {
                    ...state,
                    result:state.result - action.payload,        //new
                    lastValues:[...state.lastValues,action.payload]
                };
                break;
            default:return null;
    }
    return state;
};
export default mathReducer;