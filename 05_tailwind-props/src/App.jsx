import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card username='sunset' img='https://images.pexels.com/photos/34498268/pexels-photo-34498268.jpeg'/> 
     <Card username='Weather' img= "https://images.pexels.com/photos/14381763/pexels-photo-14381763.jpeg"  /> 
    </>
  )
}

export default App
