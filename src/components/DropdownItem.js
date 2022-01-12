import React, { Component } from 'react'
import {qualities} from '../data/proposData'
import dropdownbtn from '../assets/dropdownbtn.svg'
export default class DropdownItem extends Component {
  render() {
    return (
      <div>
        {qualities.map(({ id, title, description }) => (
          <div key={id} className="list-item">
            <div className="dropdown-btn">{title}<img src={dropdownbtn} alt='btn of dropdown'/></div>
            <div className="dropdown-content">
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
