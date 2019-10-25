import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import '../src/assets/iconfont/iconfont.css'


import { Provider } from 'react-redux'; 
import RouteConfig from './router/index'
import * as serviceWorker from './serviceWorker';

import {createStore,combineReducers,applyMiddleware} from 'redux';
import {createLogger} from "redux-logger";


// 多个reducer
const mathReducer = (state={
    result:1,
    lastValues:[]
},action)=>{ 
    switch (action.type){
        case "ADD":
        //    return state.result += action.payload;
            // state = {
            //     result:state.result,
            //     lastValues:state.lastValues
            // };
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
    }
    return state;
};
const userReducer = (state={
    name:":jeckson",
    age:23
},action)=>{
    switch (action.type){
        case "SET_NAME":
            state = {
                ...state,
                name:action.payload
            };
            break;
        case "SET_AGE":
                state = {
                    ...state,
                    age:action.payload
                };
                break;
    }
    return state;
};
// const store = createStore(mathReducer,userReducer)

const myLogger = (store)=>(next)=>(action)=>{
    console.log("logged Action",action);
    next(action);
}
const store = createStore(combineReducers(
    {mathReducer,userReducer}),
    {},
    //  applyMiddleware(myLogger)   打印哪一个action及内容
    applyMiddleware(createLogger()) //打印详细action及内容
)
store.subscribe(()=>{
    // console.log("store update",store.getState())
})

// import { connect } from 'react-redux'


ReactDOM.render(<RouteConfig />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();  