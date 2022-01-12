import React, { Component } from 'react'
import Background from '../assets/Background.png'

export default class BackgroundDescrption extends Component {
  render() {
    return (
      <div>
        <img src={Background} alt="Background" />
      </div>
    )
  }
}
