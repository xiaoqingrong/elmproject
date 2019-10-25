import {createStore} from 'redux';
// state 
const initialState = { counter: 5 };

// action 
const add = { type: 'ADD' };
const minus = { type: 'MINUS' };
const reset = { type: 'RESET' };

// reducer
function counter(state = initialState, action) {
    switch(action.type) {
        case 'ADD': 
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'MINUS':
            return  {
                ...state,
                counter: state.counter - 1
            }
        case 'RESET':
            return {
　　　　　　　　　...state,　
　　　　　　　　　counter: 5
　　　　　　　};
        default:
            return state;
    }
}
// 创建store
const store = createStore(counter);

// export 出去store 和 action
export {store, add, minus, reset};