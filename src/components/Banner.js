import React, { Component } from 'react'
import Background from '../assets/Background.png'
import BackgroundAboutPage from '../assets/BackgroundAboutPage.png'
import '../style/Banner.scss'
export default class Banner extends Component {
  render() {
    return (
      <div className="container">
        <img
          src={
            window.location.pathname === '/propos'
              ? BackgroundAboutPage
              : Background
          }
          alt="Background"
          className={window.location.pathname==='/propos' ?'backgroundPropos':'backgroundAccueil'}
        />
        {window.location.pathname === '/' ? (
          <div>
            <div className="cover"></div>
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
        ) : null}
      </div>
    )
  }
}
