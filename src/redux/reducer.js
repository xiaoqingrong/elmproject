function reducer(state={
    text:"你好",
    name:"jeckson"
},action){
    switch(action.type){
        case 'change':
        return{
            name:action.payload,
            text:"你好"+ action.payload
        }
        default :
            return state
    }
}
export default reducer;