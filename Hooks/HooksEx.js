import React, { useState } from 'react'

function HooksEx() {
    const [count,setCount]=useState(0)
    let inc=()=>{setCount(count+1)}

    const [count1,setCount1]=useState(0)
    let inc1=()=>{setCount1(count1+5)}

    document.title="Hack";
    // useEffect(()=>{
    //     setCount(count+1)
    //     setCount1(count1+1)
    // })
    
    return (
    <div>HooksEx<br/>
    <h1>{count}     {count1}</h1>
    <button onClick={inc}>Click</button>
    <button onClick={inc1}>Click</button>
    
    </div>
  )
}

export default HooksEx