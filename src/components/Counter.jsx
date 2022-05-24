import React from 'react'
import { useState } from 'react'
import styles from "./Counter.module.css"

const Counter = () => {

    const [counter,setCounter]=useState(0)
  return (
      <div>
    <div className={styles.count}   style={counter%2==1 ? {color:"red"} :{color:"green"}}>Count is : {counter}
       
    </div>
     <button onClick={()=>setCounter(counter+1)}>Increment</button>
     <button onClick={()=>counter>0 ?  setCounter(counter-1) : null}>Decrement</button>
     <button onClick={()=>setCounter(counter*2)}>Double</button>

     </div>
  )
}

export default Counter