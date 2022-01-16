import React, { Component } from "react";
import star from '../assets/star.svg'
import starColor from '../assets/starColor.svg'
export default class StarRating extends Component{
    render(){
     console.log(this.props.rating) 
      return (
        <div>
          { [...Array(5)].map((index,i)=>{
            return (<img src={i <=this.props.rating-1 ? starColor : star} alt="rating" key={i}/>)
          })}
        </div>
      )
    }
}