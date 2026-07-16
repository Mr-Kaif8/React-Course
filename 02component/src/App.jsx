 import React from 'react'
 import './App.css'  
import Card from './component/Card'
import Navbar from './Navbar'
 
 const App = () => {
  const user = 'kaif'
  const  age = 8
   return (
     <>
     <div> 
        <Navbar/>
        <Card/>
    
      </div> 
     </>
   )
 }

 export default App
  
 