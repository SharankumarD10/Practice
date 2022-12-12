import React, { Component } from 'react'
import EnComponent from './Hoc'

class HoverCounter extends Component {

  render() {
    const {count,incr}=this.props
    return (
      <div>
      <h1><button onMouseMove={incr}>HoverCounter {count}</button> 
      </h1>
      </div>
    )
  }
}
export default EnComponent(HoverCounter);
