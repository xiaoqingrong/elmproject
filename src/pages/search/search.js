import React from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
export default class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'Search'
        }
    }
    render(){
        return(
            <div>
                <Header/>
                Search
                <Footer/>
            </div>
        )
    }
}