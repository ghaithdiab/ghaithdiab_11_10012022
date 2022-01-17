import React, { Component } from 'react'
import footerLogo from '../assets/footerLogo.png'
import '../style/Footer.scss'
export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <img src={footerLogo} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    )
  }
}
