import React from 'react';
import '../../style/header.css';

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            goBack:true,
            isLogin:'登录|注册',
            isSearch:true,
            isSelf:false
        }
    }
    hdBack=()=>{ // 调用父组件方法
        this.props.goBack();
    }
    Search=()=>{ // 调用父组件方法
        this.props.Search();
    }
    render(){
        return(
            <div className="hdBox">
                <div style={{border:'1px solid red',textAlign:'left',paddingLeft:'10px',fontSize:'20px'}}>
                    {this.state.goBack!==false?
                    <div>
                        {this.state.isSearch!==false?<span onClick={this.hdBack} style={{width:'20px'}}><i style={{fontWeight:'bold'}} className="iconfont icon-jiantou3"></i></span>
                        :<span onClick={this.Search} style={{width:'20px'}}><i className="iconfont icon-sousuo"></i></span>}
                    </div>
                    :
                    <span>elm</span>}
                </div>
                <div className="headTitle">
                    {this.props.city}
                </div>
                <div>
                    {this.state.isLogin==='切换城市'?
                    <div style={{textAlign:'right',paddingRight:'6px'}}>
                        {this.state.isSelf!==false?<span onClick={this.hdBack}>{this.state.isLogin}</span>
                        :<span onClick={this.hdBack}><i className="iconfont icon-self" style={{fontWeight:'bold'}}></i></span>}
                    </div>
                    :<span>{this.state.isLogin}</span>}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.changeLog();
        this.isAtShop();
        this.isisSelf();
    }
    // 当页面跳转到首页把logo显示出来
    showLogo=()=>{
        this.setState({
            goBack:false
        })
    }
    changeLog(){
        if(this.props.isLogin===true){
            this.setState({
                isSearch:true
            })
        }else{
            this.setState({
                isSearch:false
            })
        }
        
    }
    // 判断是否在商品页面，如果在，那么让header头部的logo变了
    isAtShop(){
        if(this.props.isSearch===true){
            this.setState({
                isLogin:'切换城市'
            })
        }else{
            this.setState({
                isLogin:'登录|注册'
            })
        }
    }
    isisSelf=()=>{
        if(this.props.isSelf===false){
            this.setState({
                isSelf:true
            })
        }else{
            this.setState({
                isSelf:false
            })
        }
    }
}