// ContextAPI from A to D direct without going 1 to 1 from A-B,B-C,C-D


import React, { createContext } from 'react'
import B from './B'

const GreetContext = createContext();
// const Greet2Context = createContext();

const A = () => {

    const greet ="Hello";
    const greet2 ="Hello2";
  return (
    <div>
        <GreetContext.Provider value={{greet,greet2}}>
            <B/>
        </GreetContext.Provider>
        {/* <GreetContext.Provider value={greet}>
        <Greet2Context.Provider value={greet2}>
            <B/>
        </Greet2Context.Provider>
        </GreetContext.Provider> */}
        {/* This is A 
      <B greet={greet}/> */}
    </div>
  )
}

export default A
export {GreetContext}
// export {Greet2Context}