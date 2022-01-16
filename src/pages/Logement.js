import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {data} from '../data/data'
import Slider from '../components/Slider'
import Tag from '../components/Tag'
import StarRating from '../components/StarRating'
export default class Logement extends Component {
  render() {
    const logementData=data.find((e)=>{return e.id===window.location.pathname.substring(10)})
    return (
      <div>
        <Header />
        <Slider photos={logementData.pictures}/>
        <section className='info'>
          <div className='addressInfo'>
            <div className='tags'>
              <h1>{logementData.title}</h1>
              <h6>{logementData.location}</h6>
              <Tag tags={logementData.tags}/>
            </div>
            <div className='persoInfo'>
                <h6>{logementData.host.name}</h6>
                <img src={logementData.host.picture} alt={logementData.host.name}/>
                <StarRating rating={logementData.rating}/>
            </div>
          </div>
          <div className='logementInfo'>

          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
