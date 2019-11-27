import React,{Component} from 'react';
import store from '../../redux/store';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
export default class Self extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Self'
        }
    }
    render(){
        return(
            <div>
                <Header
                 goBack={()=>{
                    this.props.history.go(-1); 
                    }} 
                    backMindex={()=>{
                        this.props.history.push({pathname:"./msiteIndex"}); 
                        window.localStorage.setItem('left',2);
                        window.localStorage.setItem('right',2);
                    }}
                backMain={()=>{
                    this.props.history.push({pathname:"/"}); 
                    window.localStorage.setItem('left',0);
                    window.localStorage.setItem('right',0);
                    }
                }
                />
                Self
                <Footer goBack4={()=>{
                        this.props.history.push('./self'); 
                    }}/>
            </div>
        )
    }
    componentDidMount(){
        console.log(store.getState())
    }
}