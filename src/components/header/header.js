import React from 'react';
import '../../style/header.css';
import {changeIcon} from '../../redux/action/hdLeftAction'
import store from '../../redux/store'
import { connect } from 'react-redux';
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            goBack:true,
            isLogin:'登录|注册',
            icon:0
        }
    }
    render(){
        return(
            <div className="hdBox">
                <div style={{border:'1px solid red',textAlign:'left',paddingLeft:'10px',fontSize:'20px'}}>
                    
                    {
                        
                        this.state.icon===0?<span>elm</span>:''
                    }
                    {
                        this.state.icon===1?
                        <span onClick={this.hdBack} style={{width:'20px'}}><i style={{fontWeight:'bold'}} className="iconfont icon-jiantou3"></i></span>:''
                    }
                    {
                        this.state.icon===2?
                        <span onClick={this.Search} style={{width:'20px'}}><i className="iconfont icon-sousuo"></i></span>:''
                    }
                </div>
                <div className="headTitle">
                    {this.props.city}
                </div>
                <div>
                    {
                        this.state.icon===0?<span>登录|注册</span>:''
                    }
                    {
                        this.state.icon===1?
                        <span onClick={this.hdBack}>切换城市</span>:''
                    }
                    {
                        this.state.icon===2?
                        <span onClick={this.hdBack}><i className="iconfont icon-self" style={{fontWeight:'bold'}}></i></span>:''
                    }
                </div>
            </div>
        )
    }
    componentWillMount(){
        this.headIcon();
    }
    componentDidMount(){
        this.isisSelf();
       
    }
    
    headIcon(){
        console.log( this.state.icon)
        this.setState({
            icon:store.getState().leftIcon.icon
        })
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
const mapStateToProps = (state)=>{
    return{
        id:state.id
    }
}
	
const mapDispatchToProps = (dispatch)=>{
    return{
        mainindex:(name)=>{
            dispatch(changeIcon(name))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Header)