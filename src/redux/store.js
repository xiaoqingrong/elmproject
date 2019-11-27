import {createStore,combineReducers,applyMiddleware} from 'redux';
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import createPromise from "redux-promise-middleware"

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import url from "./reducers/urlReducer";
import id from "./reducers/shopListReducer";
import Icon from "./reducers/hdIconReduce"
export default createStore(
    combineReducers({
        math,
        user,
        url,
        id,
        Icon
    }),
    {},
    //  applyMiddleware(myLogger)  // 打印哪一个action及内容
    applyMiddleware(createLogger(),thunk,createPromise) //打印详细action及内容
) 