import { useState,useCallback } from 'react'
import './App.css'
``
function App() {

  let [counter,setCounter]=useState(15)

  //counter=15
  const addValue = () => {
    if(counter<20){
    console.log("clicked",counter);
    
    // setCounter(counter+1)  in this value will not update after first lime
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    setCounter((prevCounter)=>prevCounter+1)//but when it came through an call back because setcounter take a call back behind the hood so then it change according to the previous state
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)

    }
    

  }
  const removeValue = () => {
    
    if(counter>0){
      
    console.log("remove counter",counter);
    setCounter(counter-1)
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
