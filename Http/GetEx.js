import React, { Component } from 'react'
import axios from 'axios'
import './GetEx.css'
export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data)
            this.setState({posts:res.data})
        })
    }

  render() {
      const {posts} = this.state
    return (
      <div>GetEx
      <button>Get</button>
      <p>
        {posts.map(
            (valp)=><table >
            <thead>
            <tr>
                <th>userId</th>
                <th>Id</th>
                <th>Title</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td key={valp.userId}>{valp.userId} </td>
            <td>{valp.id}</td>
            <td>{valp.title}</td>
            </tr>
            </tbody>
            </table>
        )}
      </p>
      </div>
    )
  }
}
