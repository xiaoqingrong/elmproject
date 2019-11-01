// 同步
export function setName(name){
    return{
        type:"SETNAME",
        payload:name
    }
}
export function setAge(age){
    return{
        type:"SETAGE",
        payload:age
    }
}
// 异步
// export function setName(name){
//     // return dispatch =>{
//     //     setTimeout(() => {
//     //         dispatch({
//     //             type:"SET_NAME",
//     //             payload:name
//     //         })
//     //     }, 2000);
//     // }
//     return {
//         type:"SET_NAME",
//         payload:new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve(name);
//             },2000)
//         })
//     } 
// }
// export function setAge(age){
//     return{
//         type:"SET_AGE",
//         payload:age
//     }
// }