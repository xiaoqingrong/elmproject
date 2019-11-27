const hdIconReduce = (state={
    id:'0'
},action)=>{
   switch (action.type){
       case "HDICON":
           state = {
               ...state,
               id:action.payload
           };
           break;
   }
   return state;
};
export default hdIconReduce;