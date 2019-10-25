import React,{Component} from 'react';
import fetchRequest from '../../config/fetch';
import '../../style/msiteIndex.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
export default class MsiteIndex extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'msite',
            isSearch:true,  //是否显示搜索图标
            isSelf:true,    //是否显示我的图标
            city:'',        //头部中间的文字
            bannerKey:[],
            banenrList:[],
            basicUrl:"https://fuss10.elemecdn.com",
            foodArrL:[],
            foodArrH:[],
            resShopList:[],
            imgUrl:'https://elm.cangdu.org/img/'
        }
    }
    render(){
        return(
            <div style={{backgroundColor:'#f2f2f2'}}>
                <Header city={this.state.city} isSelf={this.state.isSelf} isSearch={this.state.isSearch} goBack1={()=>{
                    this.props.history.go(-1); 
                    }} Search={()=>{
                        this.props.history.push('./search'); 
                        }}/>
                <div>
                    <div><button onClick={this.addNumHandle}>222</button>{this.state.num}</div>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <ul>
                                {this.state.foodArrL.map((item,index)=>(
                                    <li key={index}>
                                        <img src={this.state.basicUrl+item.image_url} alt=""/>
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
                                            <img src={this.state.basicUrl+item.image_url} alt=""/>
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
                                <div key={index} className="listCon">
                                    <div>
                                        <img src={this.state.imgUrl+item.image_path} alt=""/>
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
                <Footer lat={this.props.location.state.lat} log={this.props.location.state.log} goBack={()=>{
                        this.props.history.push('./msiteIndex'); 
                    }}/>
            </div>
        )
    }
    componentDidMount(){
        // console.log(Store.getState())
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
    // addNumHandle=()=>{
    //     Store.dispatch(actions_A[ADDNUM]())
    //     console.log(Store.getState().A.num)
    // }
    localPositin(){
        fetchRequest('/v2/pois/'+this.props.location.state.lat+','+this.props.location.state.log,'GET')
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
        fetchRequest('/shopping/restaurants?latitude='+this.props.location.state.lat+'&longitude='+this.props.location.state.log,'GET')
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
    // 评价星星
  starCount = (rating) => {
    var items = []
    for ( var i = 0; i < Math.ceil(rating);i++){
      items.push(<i className='iconfont icon-star_full' key={i}></i>)
    }
    return items
  }
}
	
// export default connect(mapStateToProps,mapDispatchToProps)(MsiteIndex)