import React,{Component} from 'react';
import { connect } from 'react-redux';
import {hdIcon} from '../../redux/action/hdIconAction'
import store from "../../redux/store";

import fetchRequest from '../../config/fetch';
import '../../style/msiteIndex.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
class MsiteIndex extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'msite',
            isSearch:true,  //是否显示搜索图标
            isSelf:true,    //是否显示我的图标
            city:'',        //头部中间的文字
            bannerKey:[],
            banenrList:[],
            foodArrL:[],
            foodArrH:[],
            resShopList:[]
        }
    }
    render(){
        return(
            <div style={{backgroundColor:'#f2f2f2'}}>
                <Header city={this.state.city} isSelf={this.state.isSelf} isSearch={this.state.isSearch} goBack1={()=>{
                    this.props.history.go(-1); 
                    }} 
                    Search={()=>{
                        this.props.history.push('./search'); 
                    }}
                    goMy={()=>{
                        this.props.mainindex(0)
                        this.props.history.push({pathname:"./self"}); 
                        window.localStorage.setItem('left',1);
                        window.localStorage.setItem('right',3);
                        }
                    }/>
                    
                <div>
                    <div className="swiper-container" style={{paddingTop:40}}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <ul>
                                {this.state.foodArrL.map((item,index)=>(
                                    <li key={index} onClick={()=>{
                                        this.props.history.push('./food');
                                    }}>
                                        <img src={store.getState().url.basicUrl+item.image_url} alt=""/>
                                        <p>{item.title}</p>
                                    </li>
                                ))
                                }
                            </ul>
                            </div>
                            <div className="swiper-slide">
                                <ul>
                                    {this.state.foodArrH.map((item,index)=>(
                                        <li key={index}>
                                            <img src={store.getState().url.basicUrl+item.image_url} alt=""/>
                                            <p>{item.title}</p>
                                        </li>
                                    ))
                                    }
                            </ul>
                            </div>
                        </div>
                        {/* <!-- 如果需要分页器 --> */}
                        <div className="swiper-pagination"></div>
                        
                        {/* <!-- 如果需要导航按钮 --> */}
                        {/* <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div> */}
                        
                        {/* <!-- 如果需要滚动条 --> */}
                        {/* <div className="swiper-scrollbar"></div> */}
                    </div>
                    <div className="nearShops">
                        <h5>附近商家</h5>
                        <div>
                            {this.state.resShopList.map((item,index)=>(
                                <div key={index} className="listCon" onClick={()=>
                                {
                                    this.toMenu(index)
                                this.props.history.push({pathname:'./ShopList',state:{i:index,img:this.state.resShopList[index]}});
                                }
                                }>
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
                                        <span style={{backgroundColor:' #158ced',color: '#ffffff'}}>{item.delivery_mode.text}</span><span>准时达</span>
                                        <p><span>{item.distance}</span>/<span style={{color:'#158ced'}}>{item.order_lead_time}</span></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    componentDidMount(){
        this.localPositin();
        this.indexEntry();
        this.resShopList();
        new Swiper ('.swiper-container', {
            loop: true,
            pagination: {  //分页器
                el: '.swiper-pagination'
            }
        })
    }
    localPositin(){
        fetchRequest('/v2/pois/'+localStorage.getItem("lat")+','+localStorage.getItem("log"),'GET')
        .then( res=>{
            //请求成功
           this.setState({
               city:res.address
           })
        }).catch( err=>{ 
            console.log("请求失败")
            //请求失败
        })
    }
    indexEntry=()=>{
        fetchRequest('/v2/index_entry','GET')
        .then( res=>{
            //请求成功
           let arr=[];
            for(var item in res){
                if(res.hasOwnProperty(item)){
                    arr.push(item); //注意这里所说的空格
                }
            }
            let resLength = res.length;
            let foodArr = [];
            for (let i = 0, j = 0; i < resLength; i += 8, j++) {
                foodArr[j] = res.splice(0, 8);
              }
            this.setState({
                bannerKey:arr,
                foodArrL:foodArr[0],
                foodArrH:foodArr[1]
            })
        }).catch( err=>{ 
            console.log("请求失败")
            //请求失败
        })
    }
    resShopList(){
        fetchRequest('/shopping/restaurants?latitude='+localStorage.getItem("lat")+'&longitude='+localStorage.getItem("log"),'GET')
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
    // 附近商家跳转
    toMenu(i){
        fetchRequest('/shopping/restaurants?latitude='+localStorage.getItem("lat")+'&longitude='+localStorage.getItem("log"),'GET')
        .then( res=>{
            //请求成功
            // console.log(this.state.resShopList[res[i].id-1])
            // console.log(this.state.resShopList[res[i].id].image_path)
            
        }).catch( err=>{ 
            console.log("请求失败")
            
            //请求失败
        })
    }
    // 评价星星
  starCount = (rating) => {
    var items = []
    for ( var i = 0; i < Math.ceil(rating);i++){
      items.push(<i className='iconfont icon-star_full' key={i}></i>)
    }
    return items
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
            dispatch(hdIcon(name))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(MsiteIndex);