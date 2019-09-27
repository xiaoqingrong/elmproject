import React from 'react';
import Main from '../pages/main/main';
import City from '../pages/city/city';
import MsiteIndex from '../pages/msiteIndex/msiteIndex';
import Search from '../pages/search/search';
import Order from '../pages/order/order';
import Self from '../pages/self/self';
import { BrowserRouter, Route, Switch } from "react-router-dom";
export default class RouteConfig extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'22'
        }
    }
    render(){
        return(
            <BrowserRouter>
                <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/city" component={City}/>
                        <Route path="/msiteIndex" component={MsiteIndex}/>
                        <Route path="/search" component={Search}/>
                        <Route path="/order" component={Order}/>
                        <Route path="/self" component={Self}/>
                </Switch>
            </BrowserRouter>
        )
    }
}