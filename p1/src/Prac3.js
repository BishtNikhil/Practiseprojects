// useEffect and its dependencies

import React, { useEffect, useState } from 'react'

function Prac3() {

    const[clicked, setClicked] = useState();
    const [count, setCount] = useState(0);

    useEffect(()=>{
        alert("I am useEffect")
    },[clicked,count])


  return (
    <div>
      <button onClick={()=> setClicked('Subscribe')}>Subscribe</button>
      <br/>
      <br/>
      <button onClick={()=> setClicked('To')}>To</button>
      <br/>
      <br/>
      <button onClick={()=> setClicked('Our Channel')}>Our Channel</button>
      <h1>{clicked}</h1>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Prac3
