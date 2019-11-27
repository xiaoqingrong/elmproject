import React from 'react';
import '../../style/mian.css';
import {connect} from 'react-redux';
import {hdIcon} from '../../redux/action/hdIconAction'
import fetchRequest from '../../config/fetch';
import Header from '../../components/header/header';
class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            localAdd:'',
            hotCity:[],
            localId:0,
            groupcity:{},
            groupA:[],
            groupTitle:[]
        }
    }
    render(){
        return(
            <div className="main">
                <Header ref="mainChild"
                goMy={()=>{
                    this.props.history.push({pathname:"./self"}); 
                    window.localStorage.setItem('left',1);
                    window.localStorage.setItem('right',3);
                    }
                }
                />
                <div className="localCity" style={{paddingTop:40}}>
                    <nav>
                        <div><span>当前定位城市:</span><span>定位不准时，请在城市列表中国选择</span></div>
                    </nav>
                    <p onClick={()=> {this.props.history.push({pathname:'./city',state: { city:this.state.localAdd ,left:1,right:1,id:this.state.localId }})}}>{this.state.localAdd}<i className="iconfont icon-jiantou"></i></p>
                </div>
                <div className="hotCity">
                    <h5>热门城市</h5>
                    <ul>
                        {
                            this.state.hotCity.map((item,index)=>(
                            <li onClick={()=> {this.props.history.push({pathname:'./city',state: { city:item.name,id:item.id }})}} key={index}>{item.name}</li>
                        ))}
                    </ul>
                </div>
                <section>
                    <ul className="group_city_container">
                        {this.state.groupTitle.map((item,index)=>(
                            <li key={index}>
                                <h4>{item}</h4>
                                <ul className="groupItem">
                                    {
                                        this.state.groupcity[item].map((item,index)=>(
                                            <li onClick={()=> {this.props.history.push({pathname:'./city',state: { city:item.name,id:item.id }})}} key={index}>{item.name}</li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        )
    }
    componentDidMount() {
        this.getData();         // 本地地址
        this.hotData();         // 热门城市
        this.groupcity();       // 城市列表
        this.mainLogo();        // 当页面跳转到首页把logo显示出来
        this.props.mainindex(1)
    }
    
    getData(){  //请求数据函数 
        fetchRequest('/v1/cities?type=guess','GET')
        .then( res=>{
            //请求成功
            this.setState({
                localAdd:res.name,
                localId:res.id
            })
        }).catch( err=>{ 
            console.log(err)
            //请求失败
        })
    }
    
    hotData(){
        fetchRequest('/v1/cities?type=hot','GET')
        .then( res=>{
            //请求成功
            this.setState({
                hotCity:res
            })
        }).catch( err=>{ 
            console.log("请求失败")
            //请求失败
        })
        
    }
    
    groupcity(){
        fetchRequest('/v1/cities?type=group','GET')
        .then( res=>{
            //请求成功
            //获取res的属性字母
            var arr=[];
            for(var item in res){
                if(res.hasOwnProperty(item)){
                    arr.push(item); //注意这里所说的空格
                }
            }
            this.setState({
                groupcity:res,
                groupTitle:arr.sort()
            })
            
        }).catch( err=>{ 
            console.log("请求失败")
            //请求失败
        })
    }
    
    mainLogo(){
        this.refs.mainChild.showLogo();
        window.localStorage.setItem('left',0)
        window.localStorage.setItem('right',0)
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
export default  connect(mapStateToProps,mapDispatchToProps)(Main);