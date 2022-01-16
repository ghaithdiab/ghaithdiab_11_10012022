import React, { Component } from 'react'

export default class Tag extends Component {
  render() {
    return (<div>
      {this.props.tags.map((title,index)=>{
        return(<div key={index}>{title}</div>)
      })}
    </div>)
  }
}
