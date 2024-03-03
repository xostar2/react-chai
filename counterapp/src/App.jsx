import { useState,useCallback } from 'react'
import './App.css'
``
function App() {

  let [counter,setCounter]=useState(15)

  //counter=15
  const addValue = () => {
    if(counter<20){
    console.log("clicked",counter);
    counter=counter+1
    setCounter(counter)
    }
    //setCounter(counter+1)

  }
  const removeValue = () => {
    
    if(counter>0){
      counter=counter-1
    setCounter(counter)
    console.log("remove counter",counter);
    }
  }

  return (
    <>
     <h1>chai with react</h1>
     <h2>countervalue :{counter}</h2>
     <button onClick={addValue}>add value</button>
     <br/>
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
