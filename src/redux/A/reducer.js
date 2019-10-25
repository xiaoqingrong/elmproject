import initState from './state';
import {ADDNUM} from './action_type';
export default (state=initState,actions)=>{
    const {type,text}=actions;
    switch(type){
        case ADDNUM:{
            return Object.assign({},state,{num:state.num+1})
        }

        default:{
            return state
        }
    }
}