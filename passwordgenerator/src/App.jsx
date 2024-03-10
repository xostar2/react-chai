import { useState ,useCallback, useEffect,useRef} from 'react'

import './index.css'

function App() {
  const [length,setlength]=useState(8);
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [password,setpassword]=useState("");
  //usereff hook we have to create it for useing it
  const passwordref= useRef(null);//null if dont have any starting value
  
  const passwordGenerator=useCallback(()=>{
          let password="";
          let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

          if(numberAllowed) str+="0123456789";
          if(charAllowed) str+="!@#$%^&*()_+={}~`[]-"

          for(let i=1;i<=length;i++){
                  let char=Math.floor(Math.random()*str.length+1)
                  password+=str.charAt(char);
          }
          setpassword(password);

  },[length,numberAllowed,charAllowed,setpassword]);
  
  //this is how to copy something step by step
//  const copyPasswordonclipBoard =useCallback(()=>{
//         window.navigator.clipboard.writeText(password)
//  },[password])

const copyPasswordonclipBoard =useCallback(()=>{
  passwordref.current?.select(); //use to highlite the selected part
  passwordref.current?.setSelectionRange(0,20);//limit  the slection
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3 mx-4 px-3 '>Password Genrator</h1>
     <div className='flex shadow rounder-lg overflow-x-hidden mb-4 '>
        <input type='text' 
        value={password} 
        className='outline-none w-full py-1 px-3' placeholder='password' 
        readOnly
        ref={passwordref}
        />
        <button 
        onClick={copyPasswordonclipBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        
     </div>
     <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={6} 
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{
                setlength(e.target.value)
              }}/>
              <label>length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                  <input
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id="numberInput"
                    onChange={()=>
                          {
                            setnumberAllowed((prev)=> !prev);
                          }
                    }
                  />
                  <label htmlFor='numberInput'>Number</label>
            </div>
            <div className='flex items-center gap-x-1'>
                  <input
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id="CharacterInput"
                    onChange={()=>
                          {
                            setcharAllowed((prev)=> !prev);
                          }
                    }
                  />
                  <label htmlFor='charachterInput'>Characters</label>
            </div>
     </div>
     </div>
    </>
  )

  }
export default App
