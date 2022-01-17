import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../style/Header.css'
export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to="/">
          <img src={logo} alt="logo" className='logo'/>
        </Link>
        <nav>
          <Link to="/"className={window.location.pathname==='/'? 'navItem active' :'navItem'}>Accueil</Link>
          <Link to="/propos" className={window.location.pathname==='/propos'? 'navItem active' :'navItem'}> A Propos</Link>
        </nav>
      </div>
    )
  }
}
