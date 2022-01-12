import React, { Component } from 'react'
import Header from '../components/Header'
import BackgroundDescrption from '../components/BackgroundDescrption'
import DropdownItem from '../components/DropdownItem'
import Footer from '../components/Footer'
export default class Propos extends Component {
  render() {
    return (
      <div>
        <Header />
        <BackgroundDescrption />
        <DropdownItem/>
        <Footer/>
      </div>
    )
  }
}
