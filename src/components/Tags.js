/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import '../style/Tags.scss'
export default class Tags extends Component {
  render() {
    return (<div className='tagsContainer'>
      {this.props.tags.map((title,index)=>{
        return(<div key={index} className='tag'>{title}</div>)
      })}
    </div>)
  }
}
