const shopListReducer = (state={
    id:'1'
},action)=>{
   switch (action.type){
       case "LIST_ID":
           state = {
               ...state,
               id:action.payload
           };
           break;
   }
   return state;
};
export default shopListReducer;