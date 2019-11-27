import React from 'react';
import '../../style/header.css';
import store from "../../redux/store"
export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            left:'45450',
            right:'4545'
        }
    }
    hdBack=()=>{ // 调用父组件方法
        this.props.goBack();
    }
    goMy=()=>{
        this.props.goMy();
    }
    Search=()=>{ // 调用父组件方法
        this.props.Search();
    }
    backMain=()=>{
        this.props.backMain()
    }
    backMindex=()=>{
        this.props.backMindex();
    }
    render(){
        return(
            <div className="hdBox">
                <div style={{textAlign:'left',paddingLeft:'10px',fontSize:'20px'}}>
                    {this.state.left==='0'?<span>elm</span>:''}
                    {this.state.left==='1'?
                        <div>
                        <span onClick={store.getState().Icon.id===0?this.backMindex:this.backMain} style={{width:'20px'}}><i style={{fontWeight:'bold'}} className="iconfont icon-jiantou3"></i></span>
                        </div>:''
                    }
                    {this.state.left==='2'?
                        <div>
                        <span onClick={this.Search} style={{width:'20px'}}><i className="iconfont icon-sousuo"></i></span>
                        </div>:''
                    }
                </div>
                <div className="headTitle">
                    {this.props.city}
                </div>
                <div>
                    {
                    this.state.right==='0'?
                        <div style={{textAlign:'right',paddingRight:'6px'}}>
                            <span onClick={this.goMy}><i className="iconfont icon-self" style={{fontWeight:'bold'}}></i></span>
                        </div>:''
                    }
                    {this.state.right==='1'?
                        <div style={{textAlign:'right',paddingRight:'6px'}}>
                        <span onClick={this.hdBack}>切换城市</span>
                        </div>:''
                    }
                    {
                        this.state.right==='2'?<span>登录注册</span>:''
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.changeLog();
        
    }
    
    // 当页面跳转到首页把logo显示出来
    showLogo=()=>{
        this.setState({
            goBack:false
        })
    }
    
    changeLog(){
        let l = localStorage.getItem('left')
        let r = localStorage.getItem('right')
        this.setState({
            left:l,
            right:r
        })
        // if(store.getState().Icon.id==1){
            
        // }
    }
}