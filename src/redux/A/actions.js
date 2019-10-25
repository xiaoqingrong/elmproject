import {
    ADDNUM
} from './action_type';
export default{
    [ADDNUM](text){
        return{
            type:ADDNUM,
            text:text
        }
    }
}