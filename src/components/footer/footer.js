import React from 'react';
import './footer.css';

import {NavLink } from "react-router-dom";
export default class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"footer"
        }
    }
    render(){
        return(
            // <Router>
                <div className="footer-container">
                    <div>
                        <NavLink to="/msiteIndex"><i className="iconfont icon-elema1"></i></NavLink>
                        <p>外卖</p>
                    </div>
                    <div>
                        <NavLink to="/search"><i className="iconfont icon-sousuo"></i></NavLink>
                        <p>搜索</p>
                    </div>
                    <div>
                        <NavLink to="/order"><i className="iconfont icon-icon-order"></i></NavLink>
                        <p>订单</p>
                    </div>
                    <div>
                        <NavLink to="/self"><i className="iconfont icon-self"></i></NavLink>
                        <p>我的</p>
                    </div>
                </div>
            // </Router>
        )
    }
}