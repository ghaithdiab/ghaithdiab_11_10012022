/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import '../style/slider.scss'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      Mlength: this.props.photos.length,
    }
  }
  nextSlide() {
    this.setState({
      current:
        this.state.current === this.state.Mlength - 1
          ? 0
          : this.state.current + 1,
    })
  }
  prevSlide() {
    this.setState({
      current:
        this.state.current === 0
          ? this.state.Mlength - 1
          : this.state.current - 1,
    })
  }
  render() {
    return (
      <section className="slider">
        <button
          className="leftBtn"
          onClick={() => {
            this.prevSlide()
          }}
        ></button>
        {this.props.photos.map((photo, index) => {
          return (
            <div
              className={
                index === this.state.current ? 'slide active' : 'slide'
              }
              key={index}
            >
              {index === this.state.current ? (
                <img src={photo} alt="Logement photos" className="imgs" />
              ) : null}
            </div>
          )
        })}
        <button
          className="rightBtn"
          onClick={() => {
            this.nextSlide()
          }}
        ></button>
        <div className="counter">{this.state.current+1}/{this.props.photos.length}</div>
      </section>
    )
  }
}
