import React from 'react';
import Main from '../pages/main/main';
import City from '../pages/city/city';
import MsiteIndex from '../pages/msiteIndex/msiteIndex';
import Search from '../pages/search/search';
import Order from '../pages/order/order';
import Self from '../pages/self/self';
import Food from '../pages/food/food';
import ShopList from '../pages/shopList/shopList';
import { HashRouter, Route, Switch } from "react-router-dom";


export default class RouteConfig extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){ 
        return(
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/city" component={City}/>
                    <Route path="/msiteIndex" component={MsiteIndex}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/self" component={Self}/>
                    <Route path="/food" component={Food}/>
                    <Route path="/shopList" component={ShopList}/>
                </Switch>
            </HashRouter>
        )  
    }
}