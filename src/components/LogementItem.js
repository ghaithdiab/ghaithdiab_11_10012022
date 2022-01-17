import React, { Component } from 'react'
import '../style/LogementItem.scss'
export default class LogementItem extends Component {
  render() {
    return (
      <li>
        <img src={this.props.cover} alt="this is cover of logement" />
        <h1>{this.props.title}</h1>
      </li>
    )
  }
}
