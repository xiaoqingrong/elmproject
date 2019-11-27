import React,{Component} from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
export default class Order extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        return(
            <div>
                <Header
                Search={()=>{
                    this.props.history.push({pathname:"./search"}); 
                }}
                goMy={()=>{
                    this.props.history.push('./msiteIndex'); 
                    // this.props.history.push({pathname:"./msiteIndex"}); 
                }}/>
                <div style={{paddingTop:40}}>order</div>
                <Footer goBack3={()=>{
                        this.props.history.push('./order'); 
                    }}
                    />
            </div>
        )
    }
}