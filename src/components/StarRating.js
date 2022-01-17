import React, { Component } from "react";
import star from '../assets/star.svg'
import starColor from '../assets/starColor.svg'
import '../style/StarRating.scss'
export default class StarRating extends Component{
    render(){
      return (
        <div className="stars">
          { [...Array(5)].map((index,i)=>{
            return (<img src={i <=this.props.rating-1 ? starColor : star} alt="rating" key={i}/>)
          })}
        </div>
      )
    }
}