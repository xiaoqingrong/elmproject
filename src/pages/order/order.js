import React from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
export default class Order extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'Order'
        }
    }
    render(){
        return(
            <div>
                <Header/>
                Order
                <Footer/>
            </div>
        )
    }
}