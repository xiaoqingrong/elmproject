import React,{Component} from 'react';
import fetchRequest from '../../config/fetch';
import Header from '../../components/header/header';

import '../../style/search.css'
import Footer from '../../components/footer/footer';
export default class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            isLogin:true,
            searchList:''
        }
    }
    render(){
        return(
            <div>
                <Header 
                    isLogin={this.state.isLogin} 
                    city="搜索" 
                    goBack={()=>{
                        this.props.history.go(-1); 
                    }}/>
                <form className="searchInp">
                    <input onChange={this.searchList} type="text" placeholder="请输入商家或美食名称"/>
                    <button onClick={this.submitSearch}>提交</button>
                </form>
                <section>
                    
                </section>
                <Footer goBack2={()=>{
                        this.props.history.push('./search'); 
                    }}/>
            </div>
        )
    }
    componentDidMount(){
        
    }
    searchList=(e)=>{
        this.setState({
            searchList:e.target.value
        })
    }
    submitSearch=()=>{
        console.log(this.state.searchList);
        fetchRequest('/v4/restaurants?geohash'+this.props.location.state.lat+','+this.props.location.state.log+'&keyword'+this.state.searchList,'GET')
        .then( res=>{
            //请求成功
           console.log(res)
        }).catch( err=>{ 
            console.log("请求失败")
        })   
    }
}