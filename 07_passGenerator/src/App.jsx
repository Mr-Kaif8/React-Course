import { useCallback, useState ,useEffect,useRef} from 'react'
function App() {

const [length, setLength] = useState(6)
const [numberAllow,setNumberAllow] = useState(false)
const [ charAllow, setCharAllow] = useState(false)
const [passsword,setPassword] = useState("")

//useRef hook 
const passRef = useRef(null)

const passswordGenerator = useCallback(() =>{
  let pass = ""
  let stri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllow) stri +="0123456789"
  if(charAllow) stri += "!#\$%&~¡¢£¥©"
  for (let i= 1; i< length; i++) {
    const  char =Math.floor(Math.random()*stri.length+1)
     pass += stri.charAt(char)
  }
  setPassword(pass)

}, [length,numberAllow,charAllow,setPassword]) // setPassword optimization ke liye likha hai

//copy button code 
const copyPassToClipBoard =useCallback(()=>{

  passRef.current?.select()   // jo copy hua hai usko highligh krne ke liye  
  window.navigator.clipboard.writeText(passsword)    // pass ko clipboard pr copy krne ke liye 
   alert("Password Copy to Clipborard :")
},[passsword])

useEffect(()=>{
  passswordGenerator()
},[length,numberAllow,charAllow ,passswordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-16 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center text-white pt-9'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-4 pb-10'>
          <input
           type="text"
           value={passsword}
           className='outline-none w-full py-1 px-3 '
            placeholder='password'
            readOnly
            ref={passRef}
           />
           <button  onClick={copyPassToClipBoard} className=' outline-none bg-blue-700
            test-white px-3 py-0.5 shrink-0 '>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 '>
              <input 
              type="range" 
               min={6}
               max={50}
               value={length}
               className='cursor-pointer '
               onChange={(e) =>{
                setLength(e.target.value)
               }}
               />
               <label htmlFor="">Length:{length} </label>
             </div>
             <div className='flex items-center gap-x-1 ' >
              <input type="checkbox" 
              defaultChecked={numberAllow}
               id='numberInput'
               onChange={()=>{
                setNumberAllow((prev)=>!prev)
               }}
              />
              <label htmlFor="numberInput">Numbers</label>
             </div>
             <div className='flex items-center gap-x-1 '>
             <input 
             type="checkbox" 
              defaultChecked={charAllow}
               id='characterInput'
               onChange={()=>{
                setCharAllow((prev)=> !prev
                               )}
              } 

               />
               <label htmlFor="
               characterInput">Characters</label>
             </div>
        </div>
      </div>
    </>
  )
}

export default App
