import React,{Component} from 'react';
import { connect } from 'react-redux';
import store from "../../redux/store";
import {setName} from "../../redux/action/userAactions";
import Header from '../../components/header/header';
class Food extends Component{
    constructor(props){
        super();
        this.state={
            name:'food',
            isSearch:true
        }
    }
    render(){
        return(
            <div>
                <Header city={this.state.city} isSelf={this.state.isSelf} isSearch={this.state.isSearch} goBack1={()=>{
                    this.props.history.go(-1);
                }} Search={()=>{
                    this.props.history.push('./search');
                }}/>
                <h1>000</h1>
            </div>
        )}

}
const mapStateToProps = (state)=>{
    return{
        user:state.user,
        math:state.math
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        sertName:(name)=>{
            dispatch(setName(name))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Food);