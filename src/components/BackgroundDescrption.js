import React, { Component } from 'react'
import Background from '../assets/Background.png'
import BackgroundAboutPage from '../assets/BackgroundAboutPage.png'
export default class BackgroundDescrption extends Component {
  
  render() {
    return (
      <div>
        <img src={window.location.pathname ==='/propos' ? BackgroundAboutPage : Background} alt="Background" />
      </div>
    )
  }
}
