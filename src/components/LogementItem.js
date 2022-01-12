import React, { Component } from "react";

export default class LogementItem extends Component{
  render(){
    return(
      <li>
        <img src={this.props.cover} alt="this is cover of logement"/>
        <h1>{this.props.title}</h1>
      </li>
    )
  }
}