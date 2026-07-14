import { useState } from 'react'
import './App.css'


function App() {

  const addValue = () =>{
    if(counter<20){
       setCounter(counter+1)
    }
    
  }
   
  const removeValue  = ()=>{
    if(counter>0){
     setCounter(counter-1)
    }
    
  }

  return (
    <>
      <h2>Counter Value: {counter}</h2>
       <div className='div' > <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue} >Decrease Value {counter}</button></div>
    </>
  )
}

export default App
