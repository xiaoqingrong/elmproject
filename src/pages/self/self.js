import React,{Component} from 'react';

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
                <Header/>
                Self
                <Footer goBack4={()=>{
                        this.props.history.push('./self'); 
                    }}/>
            </div>
        )
    }
}