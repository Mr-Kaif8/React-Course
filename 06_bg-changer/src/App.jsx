 import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor ] = useState("color")

  return (
    <>
  <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
  ></div>
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
    <div className='flex flex-wrap justify-center gap-3 shadow-md bg-white px-3 py-2 rounded-2xl'>
      <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"green"}}>Green</button>
      <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"yellow"}}>Yellow</button>
      <button onClick={()=> setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"pink"}}>pink</button>
      <button onClick={()=> setColor("skyblue")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"skyblue"}}>SkyBlue</button>
      <button onClick={()=> setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"black"}}>Black</button>
      <button onClick={()=> setColor("teal")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"teal"}}>Teal</button>
      <button onClick={()=> setColor("navy")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"navy"}}>Navy</button>
      <button onClick={()=> setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"purple"}}>Purple</button>
      <button onClick={()=> setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"orange"}}>Orange</button>
      <button onClick={()=> setColor("violet")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"violet"}}>Violet</button>
      <button onClick={()=> setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"lavender"}}>Lavender</button>
      
      </div>
  </div>
    </>
  )
}

export default App
