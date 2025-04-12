// Increment, Decrement by onClick function by using useState


import { useState } from "react";

function Prac1() {  
  const [count, setCount] = useState(0);

  const handleClickInc=()=>{
    setCount(count+1);
  }
  const handleClickDec=()=>{
    setCount(count-1);
  }

  return (
 <div>
  <h1>{count}</h1>
  <button onClick={handleClickInc}>+</button>
  <button onClick={handleClickDec}>-</button>
 </div>
  )
}

export default Prac1;