import React ,{Component} from 'react';

export default class shopList extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'shoplist'
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1> 
            </div>
        )
    }
}