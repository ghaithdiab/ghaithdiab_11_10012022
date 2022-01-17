import React, { Component } from 'react'
import '../style/Tags.css'
export default class Tags extends Component {
  render() {
    return (<div className='tagsContainer'>
      {this.props.tags.map((title,index)=>{
        return(<div key={index} className='tag'>{title}</div>)
      })}
    </div>)
  }
}
