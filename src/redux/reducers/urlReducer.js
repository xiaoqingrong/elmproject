const urlReducer = (state={
     imgUrl:'https://elm.cangdu.org/img/',
     basicUrl:"https://fuss10.elemecdn.com",
},action)=>{
    switch (action.type){
        case "IMG_URL":
            state = {
                ...state,
                log:action.log
            };
            break;
        case "BASIC_URL":
                state = {
                    ...state,
                    lat:action.lat
                };
                break;
        // default:return null;
    }
    return state;
};
export default urlReducer;