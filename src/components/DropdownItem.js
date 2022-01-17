import React, { Component } from 'react'
import '../style/DropdownItem.scss'
export default class DropdownItem extends Component {
  constructor(){
    super()
    this.state={
      isVisible:false
    }
  }
  render() {
    return (
      <div className='dropdownContainer'>
          <div className="list-item">
            <div className={`dropdown-btn ${this.state.isVisible ? 'visible' :''}`} onClick={()=>this.setState({isVisible : !this.state.isVisible})}>{this.props.title}</div>
              {
                this.state.isVisible ? (
                  <div className='dropdown-content'>
                  <p>{this.props.description}</p>
                  </div>
                ) :null
              }
          </div>
      </div>
    )
  }
}
