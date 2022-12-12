import React, { Component } from 'react'

export default class Listex extends Component {
  render() {
    const Cars = [
        {model:"R8 ",id:1}, 
        {model:"Cullinan ", id:2},
        {model:"Centodeici ", id:3},
        {model:"Regera", id:4}
    ];
    return (
        <div>{Cars.map(
        (val)=><li key={val.id}>{val.model}</li>

        )}

        </div>
    )
  }
}
