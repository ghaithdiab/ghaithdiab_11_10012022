import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default class Logement extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>{window.location.pathname.substring(10)}</div>
        <Footer />
      </div>
    )
  }
}
