import React, { Component } from 'react'

export default class StateEx extends Component {

constructor(props) {
  super(props)

  this.state = {
     count:0,count2:0,
     name:"Shar"
  }
}
increment=()=>{
    this.setState({count:this.state.count+1})
}
inc=()=>{
    this.setState({count:this.state.count+1})
}
  render() {
    return (
      <h2>
      
      <button onClick={this.inc}>
        ClickMe {this.state.count}
      </button>
      
      </h2>
    )
  }
}

