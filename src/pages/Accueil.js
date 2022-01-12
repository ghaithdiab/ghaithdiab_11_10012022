import React, { Component } from 'react'
import Header from '../components/Header'
import BackgroundDescrption from '../components/BackgroundDescrption'
import LogementList from '../components/LogementList'
import Footer from '../components/Footer'

export default class Accueil extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BackgroundDescrption/>
        <LogementList/>
        <Footer/>
      </div>
    )
  }
}
