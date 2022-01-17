import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {data} from '../data/data'
import Slider from '../components/Slider'
import Tags from '../components/Tags'
import StarRating from '../components/StarRating'
import '../style/Logement.css'
import DropdownItem from '../components/DropdownItem'
import { Link } from 'react-router-dom'
export default class Logement extends Component {
  render() {
    const logementData=data.find((e)=>{return e.id===window.location.pathname.substring(10)})
    return (
      <div>
        <Header />
        {logementData===undefined ? (<Link to='/Error'></Link>)
        : (<div>
          <Slider photos={logementData.pictures}/>
        <section className='info'>
          <div className='addressInfo'>
            <div className='tags'>
              <h1>{logementData.title}</h1>
              <h6>{logementData.location}</h6>
              <Tags tags={logementData.tags}/>
            </div>
            <div className='persoInfo'>
                <h6>{logementData.host.name}</h6>
                <img src={logementData.host.picture} alt={logementData.host.name} className='hostingPhoto'/>
                <StarRating rating={logementData.rating}/>
            </div>
          </div>
          <div className='logementInfo'>
            <div className='right'>
            <DropdownItem title='Description' description={logementData.description}/>
            </div>
            <div className='left'>
                          <DropdownItem title="Équipements" description={logementData.equipments.map((i ,index)=>{
              return (<p key={index}>{i}</p>)
            })}/>
            </div>
          </div>
        </section>
        </div>) 
        }
        
        <Footer />
      </div>
    )
  }
}
