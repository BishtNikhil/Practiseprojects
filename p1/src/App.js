// // useReducer : Taking Example of increment and Decrement

import React, { useReducer} from 'react'

const reducer = (state, action) => {
    if(action.type==='inc'){
        return{count:state.count+1}
    }
    else if(action.type==='dec'){
        return{count:state.count-1}
    }

}

const App = () => {

    const [state, dispatch] =useReducer(reducer, {count:0} )

    const handleClickInc =()=>{
        dispatch({type: 'inc'})
    }
    const handleClickDec =()=>{
        dispatch({type: 'dec'})
    }
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  )
}

export default App


// const App = () => {

//     const [count, setCount] = useState(0);

//     const handleClickInc=()=>{
//         setCount(count + 1);
//     }
//     const handleClickDec=()=>{
//         setCount(count - 1);
//     }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleClickInc}>+</button>
//       <button onClick={handleClickDec}>-</button>
//     </div>
//   )
// }

// export default App
