import React, {Component} from 'react';
import 'antd/dist/antd.css'; 
import { Button } from 'antd';

import Header from '../../components/header/header';
import fetchRequest from '../../config/fetch';
export default class City extends Component{
    constructor(props){
        super(props)
        this.state={
            hdTitle:'',
            isLogin:this.props.location.state.city?this.props.location.state.city:false,
            search:'',
            historyKey:[],
            historyList:[],
            isClear:"",
            historyTitle:[],
            title:'',
            subTitle:'',
            sumtitle:[],
            kkk:[]
        }
    }
    render(){
        
        return(
            <div style={{backgroundColor:'#f2f2f2'}}>
                <Header 
                backMain={()=>{
                    this.props.history.push("/");
                }}
                    goBack={()=>{
                        this.props.history.go(-1); 
                        window.localStorage.setItem('left',0);
                        window.localStorage.setItem('right',0);
                    }}/>
                <div style={{backgroundColor:'#ffffff',textAlign:'center',padding:'3px',borderTop:'1px solid #ccc',borderBottom:'1px solid #ccc',paddingTop:'50px'}}>
                    <div>
                        <input onChange={this.inpChange} value={this.state.search} type="text" style={{width:'90%',height:'30px',margin:'10px 0',outline:'none',borderStyle:'none',border:'1px solid #ccc',padding:'0 4px'}} placeholder="输入学校、商务楼、地址"/>
                    </div>
                    <div>
                        <Button onClick={this.okBtn} type="primary" style={{width:'90%',height:'30px',margin:'10px 0'}}>提交</Button>
                    </div>
                </div>
                <p style={{marginTop:'10px',paddingLeft:'10px'}}>搜索历史</p>
                <div style={{backgroundColor:'#ffffff',border:'1px solid #ccc'}}>
                    {this.state.isClear===""?
                    <div>
                        {this.state.sumtitle.map((item,index)=>(
                            <li key={index} style={{padding:'10px 20px',borderBottom:'1px solid #ccc'}}>
                                {
                                   <ul key={index} onClick={()=>{this.props.history.push('./msite')}}>
                                        <li>{item.title}</li>
                                        <li style={{fontSize:'14px',color:"#ccc"}}>{item.subTitle}</li>
                                    </ul>
                                }
                            </li>
                        ))
                        }
                        <p style={{textAlign:'center',fontSize:'16px'}} onClick={this.clearAll}>清空所有</p>
                    </div>
                    :
                    <ul >   
                        {this.state.historyKey.map((item,index)=>(
                            <li key={index} style={{padding:'10px 20px',borderBottom:'1px solid #ccc'}}>
                                {
                                   <ul key={index} onClick={()=>{
                                       this.setState({
                                           title:this.state.historyList[index].name,
                                           subTitle:this.state.historyList[index].address
                                       })
                                        this.historyTitle(index); 
                                       this.props.history.push({
                                           pathname:'./msiteIndex',state:{lat:this.state.historyList[index].latitude,log:this.state.historyList[index].longitude}}
                                       )}
                                       }>
                                        <li>{this.state.historyList[index].name}</li>
                                        <li style={{fontSize:'14px',color:"#ccc"}}>{this.state.historyList[index].address}</li>
                                    </ul>
                                }
                            </li>
                        ))
                        }
                    </ul>}
                </div>
            </div>
        )
    }
    componentWillMount(){
        this.headTitle();
    }
    // 点击哪一个城市进来的
    headTitle(){
        this.setState({
            hdTitle:this.props.location.state.city
        });
        window.localStorage.setItem('left',1)
        window.localStorage.setItem('right',1)
    }
    // 地址信息输入框
    inpChange=(e)=>{
        this.setState({
            search:e.target.value
        })
        
    }
    // 确定搜索
    okBtn=()=>{
        if(this.state.search!==""){
            this.setState({
                isClear:"212"
            })
            fetchRequest('/v1/pois?city_id='+this.props.location.state.id+'&keyword='+this.state.search+'&type=search','GET')
            .then( res=>{
                //请求成功
                var arr=[];
                for(var item in res){
                    if(res.hasOwnProperty(item)){
                        arr.push(item); //注意这里所说的空格
                    }
                }
                console.log(arr)
                this.setState({
                    historyList:res,
                    historyKey:arr
                })
            }).catch( err=>{ 
                console.log("请求失败")
                //请求失败
            })
        }else{
            alert("地址信息不能为空")
        }
    }
    // 历史列表
    historyTitle=(i)=>{
        console.log(i)
        localStorage.setItem("log",this.state.historyList[i].longitude)
        localStorage.setItem("lat",this.state.historyList[i].latitude)
        window.localStorage.setItem('left',2);
        window.localStorage.setItem('right',0);
        this.state.sumtitle.push({"title":this.state.title,"subTitle":this.state.subTitle});
        // this.state.kkk = this.state.sumtitle
         this.setState({
            kkk:this.state.sumtitle
        }) 
        this.setState({
            kkk:this.state.kkk
        },()=>{
            console.log("dom挂载之后执行，如vue的nextTick一样")
        })
        
    }
    // 清除所有
    clearAll=()=>{
        if(this.state.historyList!==""){
            this.setState({
                isClear:""
            })
        }else{
            this.setState({
                isClear:"212"
            })
        }
        
    }
}