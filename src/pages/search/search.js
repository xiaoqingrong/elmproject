import React,{Component} from 'react';
import fetchRequest from '../../config/fetch';
import Header from '../../components/header/header';

import '../../style/search.css'
import Footer from '../../components/footer/footer';
import store from "../../redux/store";
export default class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            isLogin:true,
            searchWord:'',
            searchList:[],
            isShow:"1"
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
                <form className="searchInp" style={{paddingTop:70}}>
                    <input onChange={this.searchList} type="text" placeholder="请输入商家或美食名称"/>
                    <div onClick={this.submitSearch}>提交</div>
                </form>
                <section>
                    {this.state.isShow===""?
                        <div>
                            <p className="merchants">商家</p>
                            <ul className="merchList">
                                {this.state.searchList.map((item,index)=>(
                                    <li key={index}>
                                        <div>
                                            {console.log(store.getState().url.imgUrl+item.image_path)}
                                            <img src={store.getState().url.imgUrl+item.image_path} alt=""/>
                                        </div>
                                        <div>
                                            <p>{item.name}</p>
                                            <p>月售{item.recent_order_num}单</p>
                                            <p>{item.float_minimum_order_amount}元起送/距离{item.distance}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        :
                        <div></div>
                    }
                </section>
                <Footer goBack2={()=>{
                        this.props.history.push('./search'); 
                    }}/>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            isShow:"1"
        })
    }
    searchList=(e)=>{
        this.setState({
            searchWord:e.target.value
        })
    }
    submitSearch=()=>{
        this.setState({
            isShow:""
        })
        fetchRequest('/v4/restaurants?geohash='+localStorage.getItem("lat")+','+localStorage.getItem("log")+'&keyword='+this.state.searchWord,'GET')
        .then( res=>{
            //请求成功
           console.log(res)
            this.setState({
                searchList:res
            })
            console.log(this.state.searchList)
        }).catch( err=>{
            console.log("请求失败")
        })
    }
}