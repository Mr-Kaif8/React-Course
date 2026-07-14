import './App.css'
import React from 'react'
import Card from'./component/Card'

const App = () => {
  return (
    <div className='parent'>
      
           <Card user="kaif" age={21} img='https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90aXZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D' />

           <Card  user="Kartik" age={22} img='https://plus.unsplash.com/premium_photo-1723619021737-df1d775eccc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW90aXZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D' />

           <Card user='akshu' age={15} img='https://images.unsplash.com/photo-1468971050039-be99497410af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D' />
           
    </div>
  
  )
}

export default App
