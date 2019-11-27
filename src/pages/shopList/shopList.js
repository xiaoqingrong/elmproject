import React ,{Component} from 'react';
import fetchRequest from '../../config/fetch';
import store from "../../redux/store";
import '../../style/shoplist.css'

export default class shopList extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'shoplist',
            listArr:[],
            addCar:0
        }
    }
    backMindex=()=>{
        this.props.history.go(-1); 
    }
    render(){
        return(
            <div className="ShopList">
                <div className="shopHd">
                <p onClick={this.backMindex}><i style={{fontWeight:'bold'}} className="iconfont icon-jiantou3"></i></p>
                
                    <img src={store.getState().url.imgUrl+this.props.location.state.img.image_path} alt=""/>
                    <div>
                        <h1>{this.props.location.state.img.name}</h1>
                        <p>商家配送/分钟送达/配送费¥5</p>
                        <p>{this.props.location.state.img.promotion_info}</p>
                    </div>
                </div>
                <div className="shopList">
                    {this.state.listArr.map((item,index)=>(
                        
                        <div key={index} className="listCon">
                            <img src={store.getState().url.imgUrl+item.image_path} alt=""/>
                            <div>
                                <h2>{item.name}</h2>
                                <span>{item.description}</span>
                                <p>月售{item.month_sales}  好评率{item.satisfy_rate}%</p>
                                <p><span className="moneyAction">¥20</span>  起</p>
                            </div>
                            <div>
                                <p onClick={this.reduceCar.bind(this)} style={this.state.addCar===0?{left:'55%'}:{left:'1%'}}><span>-</span></p>
                                <p onClick={(i)=>this.addCar(index)}><span>+</span></p>
                                <p><span>+</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="foot">
                    <div>
                       <p className="carCicle">
                       <i className="iconfont icon-qicheqianlian-1-copy"></i>
                       </p>
                    </div>
                    <div>
                        <h2>¥0.00</h2>
                        <p>配送费¥5</p>
                    </div>
                    <div>
                        还差¥20 起送
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.listItem()
    }
    listItem(){
        
        var i = this.props.location.state.i+1
        fetchRequest('/shopping/v2/menu?restaurant_id='+i,'GET')
        .then( res=>{
            //请求成功
            let arr=[];
            for(var item in res){
                if(res.hasOwnProperty(item)){
                    arr.push(item); //注意这里所说的空格
                }
            }
            let data = res[0].foods
            this.setState({
                listArr:data
            })
        }).catch( err=>{ 
            console.log("请求失败")
            //请求失败
        })
    }
    // 添加货物
    addCar=(i)=>{
        console.log(i)
        this.setState({
            addCar:1
        })
    }
    reduceCar(){
        this.setState({
            addCar:0
        })
    }
}