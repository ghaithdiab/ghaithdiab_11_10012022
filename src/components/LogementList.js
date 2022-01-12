import React, { Component } from 'react'
import {data} from '../data/data'
import LogementItem from './LogementItem'
export default class LogementList extends Component {
  render() {
    return (
      <div>
        <ul>
          {data.map(({id,title,cover})=>(
            <div key={id}>
              <LogementItem title={title} cover={cover}/>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}
