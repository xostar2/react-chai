import { useState } from 'react'

import './App.css'

function App() {

  let counter=5

  const addValue = () => {
    counter++
    //console.log(counter);
  }
  const removeValue = () => {
    counter--
    //console.log(counter);
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
