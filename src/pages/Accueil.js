import React, { Component } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import LogementList from '../components/LogementList'
import Footer from '../components/Footer'
export default class Accueil extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <LogementList/>
        <Footer/>
      </div>
    )
  }
}
