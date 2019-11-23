// 0:logo
// 1:<返回
// 2:Q搜索
const hdLeftReducer = (state={
    icon:0
},action)=>{
    switch(action.type){
        case 'CHANGEICON':
            state={
                ...state,
                icon:action.payload
            }
            break
    }
    return state
}
export default hdLeftReducer;