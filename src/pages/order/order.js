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
                <Header/>
                Order
                <Footer goBack3={()=>{
                        this.props.history.push('./order'); 
                    }}/>
            </div>
        )
    }
}