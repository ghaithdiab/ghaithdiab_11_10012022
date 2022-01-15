import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {data} from '../data/data'
import LogementItem from './LogementItem'
import '../style/LogementList.css'
export default class LogementList extends Component {
  render() {
    return (
      <div className='logementContainer'>
        <ul>
          {data.map(({id,title,cover})=>(
            <Link to={"/logement/"+id} key={id} className='listItem'>
              <LogementItem title={title} cover={cover}/>
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}
