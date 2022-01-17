import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../style/Error.css'
export default class Error extends Component {
  render(){
    return(
      <div>
        <Header/>
        <div className='containerErrorPage'>
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/"className={window.location.pathname==='/'? 'navItem active' :'navItem'}>Retourner sur la page d’accueil</Link>
        </div>
      </div>
    )
  }
}
