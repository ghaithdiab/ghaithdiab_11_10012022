import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/propos"> A Propse</Link>
        </nav>
      </div>
    )
  }
}
