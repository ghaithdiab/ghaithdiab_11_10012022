import React, { Component } from 'react'
import footerLogo from '../assets/footerLogo.png'
export default class Footer extends Component {
  render() {
    return (
      <div>
        <img src={footerLogo} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    )
  }
}
