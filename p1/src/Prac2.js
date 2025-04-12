// Handling the data from Data.json, Clear all the data and Removing Specific data from array by using useState

import React, { useState } from 'react'
import Data from './Data.json'

function Prac2 () {

    const[nData, setnData]= useState(Data)

    const handleClick = () =>{
        setnData([])
    }

    const handleRemove =(itemId) =>{
        setnData(nData.filter(item => item.id !== itemId))
    }


  return (
    <div>
      <ul>
        {nData.map((item)=>(
        <li key={item.id}>
            {item.name}
            <button onClick={()=>handleRemove(item.id)}> Remove </button>
        </li>))
        }
      </ul>
      <button onClick={handleClick}>Clear</button>
    </div>
  )
}

export default Prac2
