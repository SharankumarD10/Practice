import React, { Component } from 'react'
import EnComponent from './Hoc'

class ClickCounter extends Component {
    
  render() {
    return (
      <div>
      <h1>{this.props.hack}</h1>
      ClickCounter
      <button onClick={this.props.incr}>Click {this.props.count}</button>
      
      </div>
    )
  }
}
export default EnComponent(ClickCounter);





