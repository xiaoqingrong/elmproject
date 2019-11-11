import React,{Component} from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import '../../style/food.css'
export default class Food extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'food'
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <div className="hdList">
                        <ul>
                            <li>甜品饮品</li>
                            <li>排序<i className="iconfont icon-jiantou_xia"></i></li>
                            <li>筛选</li>
                        </ul>
                    </div>
                    <div className="hdSlid">
                        <ul>
                            <li>
                                <i className="iconfont icon-paixu"></i>
                                <p>
                                    <span>智能排序</span>
                                </p>
                            </li>
                            <li>
                                <i className="iconfont icon-paixu"></i>
                                <p>
                                    <span>距离最近</span>
                                </p>
                            </li>
                            <li>
                                <i className="iconfont icon-paixu"></i>
                                <p>
                                    <span>销量最高</span>
                                </p>
                            </li>
                            <li>
                                <i className="iconfont icon-paixu"></i>
                                <p>
                                    <span>起送价最低</span>
                                </p>
                            </li>
                            <li>
                                <i className="iconfont icon-paixu"></i>
                                <p>
                                    <span>配送速度最快</span>
                                </p>
                            </li>
                            <li>
                                <i className="iconfont icon-paixu"></i>
                                <p>
                                    <span>评分最高</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer goBack4={()=>{
                    this.props.history.push('./food');
                }}/>
            </div>
        )
    }
}