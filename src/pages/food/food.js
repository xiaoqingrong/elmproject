import React,{Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import store from "../../redux/store";

import {setName} from "../../redux/action/userAactions"
import '../../style/food.css'
import fetchRequest from '../../config/fetch';
class Food extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'food',
            resShopList:[],
            switchHeadIcon:true,
            order_by:4
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="foodCon">
                    <div className="hdList">
                        <ul>
                            <li>甜品饮品</li>
                            <li onClick={(e)=>
                                this.paixu(e)
                            }>排序
                            {this.state.switchHeadIcon===true?<i className="iconfont icon-jiantou_xia"></i>:<i className="iconfont icon-jiantou_shang"></i>}
                            </li>
                            <li>筛选</li>
                        </ul>
                    </div> 
                    
                    <div className='hdSlid' id={this.state.switchHeadIcon===true?'':'hdSlidShow'}>
                        <ul>
                            <li onClick={(e)=>this.PaiFn(1)}>
                                <i className="iconfont icon-paixu"></i>
                                <p className="zhineng">
                                    <span>智能排序</span>
                                </p>
                            </li>
                            <li onClick={(e)=>this.PaiFn(2)}>
                                <i className="iconfont icon-julilujing"></i>
                                <p>
                                    <span>距离最近</span>
                                </p>
                            </li>
                            <li onClick={(e)=>this.PaiFn(3)}>
                                <i className="iconfont icon-xiaoliangyuce"></i>
                                <p>
                                    <span>销量最高</span>
                                </p>
                            </li>
                            <li onClick={(e)=>this.PaiFn(4)}>
                                <i className="iconfont icon-jiage"></i>
                                <p>
                                    <span>起送价最低</span>
                                </p>
                            </li>
                            <li onClick={(e)=>this.PaiFn(5)}>
                                <i className="iconfont icon-shijian"></i>
                                <p> 
                                    <span>配送速度最快</span>
                                </p>
                            </li>
                            <li onClick={(e)=>this.PaiFn(6)}>
                                <i className="iconfont icon-pingfen"></i>
                                <p>
                                    <span>评分最高</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="backColor" id={this.state.switchHeadIcon===false?'':'backColor1'}></div>
                </div>
                <div className="List">
                    {this.state.resShopList.map((item,index)=>(
                        <div key={index} className="listCon">
                            <div>
                                <img src={store.getState().url.imgUrl+item.image_path} alt=""/>
                            </div>
                            <div className="list_center">
                                <p><span>品牌</span>{item.name}</p>
                                <span className="star-num">{this.starCount(item.rating)}</span><span>{item.rating}</span>
                                <span>月售{item.recent_order_num}单</span>
                                <div>
                                    <span>¥{item.float_minimum_order_amount}起送/配运送费约¥{item.float_delivery_fee}</span>
                                </div>
                            </div>
                            <div className="list_right">
                                <p><button>保</button><button>准</button><button>票</button></p>
                                <span style={{backgroundColor:' #158ced',color: '#ffffff'}}>{
                                    item.hasOwnProperty('delivery_mode')===false?'':item.delivery_mode.text
                                    }</span><span>准时达</span>
                                <p><span>{item.distance}</span>/<span style={{color:'#158ced'}}>{item.order_lead_time}</span></p>
                            </div>
                        </div>
                        
                    ))}
                    <button onClick={this.props.id}>11111</button>
                <h1>{this.props.v.user.name}</h1>
                </div>                              
                <Footer goBack4={()=>{
                    this.props.history.push('./food');
                }}/>
            </div>
        )
    }
    starCount = (rating) => {
        var items = []
        for ( var i = 0; i < Math.ceil(rating);i++){
        items.push(<i className='iconfont icon-star_full' key={i}></i>)
        }
        return items
    }
    componentDidMount(){
        this.getFoodList()
    }
    getFoodList(){
        fetchRequest('/shopping/restaurants?latitude='+localStorage.getItem("lat")+'&longitude='+localStorage.getItem("log")+'&order_by='+this.state.order_by,'GET')
        .then( res=>{
            //请求成功
           this.setState({
            resShopList:res
           })
        }).catch( err=>{ 
            console.log("请求失败")
            //请求失败
        })
    }
    paixu(evt){
        evt.preventDefault();
        this.setState({
            switchHeadIcon:!this.state.switchHeadIcon
        })
        evt.stopPropagation()
    }
    PaiFn(e){
        console.log(e)
        fetchRequest('/shopping/restaurants?latitude='+localStorage.getItem("lat")+'&longitude='+localStorage.getItem("log")+'&order_by='+e,'GET')
        .then( res=>{
            //请求成功
           this.setState({
            resShopList:res,
            switchHeadIcon:!this.state.switchHeadIcon
           })
        }).catch( err=>{ 
            console.log("请求失败")
            //请求失败
        })
    }
}
export default connect(
    (state)=>{
        return {
            "v":state
        }
    },
    (dispatch)=>{
        return{
            "id":function(){
                dispatch(setName(123));
            }
        }
    }
)(Food);