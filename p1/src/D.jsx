//Used ContextApi 
// Also used useContext for 2 greet value

import React, { useContext } from 'react'
// import { GreetContext, Greet2Context } from './A'
import { GreetContext} from './A'

// const D = (props) => {
    const D = () => {
        const useCon = useContext(GreetContext);
        // const useCon2 = useContext(Greet2Context);
  return (
    // <h1>Greet:{useCon} {useCon2}</h1>
    <h1>Greet:{useCon.greet} <br/> {useCon.greet2}</h1>
    // <div>
    //   {/* This is {props.greet} from D */}
    // </div>
    // <GreetContext.Consumer>
    //     {
    //         (val) => {
    //             // return <h1>GREET:{val}</h1>
    //             return (
    //                 <Greet2Context.Consumer>
    //                     {
    //                         (val2) => {
    //                             return <h2>GREET:{val}
    //                             <br/>
    //                             GREET2:{val2}</h2>
    //                             }
    //                     }
    //                 </Greet2Context.Consumer>
    //             )
                
    //     }
    // }
    // </GreetContext.Consumer>

  )
}

export default D
