import { useState ,useCallback} from 'react'

import './index.css'

function App() {
  const [length,setlength]=useState(8);
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [password,setpassword]=useState("");
  
  const passwordGenerator=useCallback(()=>{
          let password="";
          let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

          if(numberAllowed) str+="0123456789";
          if(charAllowed) str="!@#$%^&*()_+={}~`[]-"

          for(let i=1;i<=array.length;i++){
                  let char=Math.floor(Math.random*str.length+1)
                  password=str.charAt(char);
          }
          setpassword(password);

  },[length,numberAllowed,charAllowed,setpassword]);


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3 px-3'>Password Genrator</h1>
     <div className='flex shadow rounder-lg overflow-x-hidden mb-6'>
        <input type='text' value={password} className='outline-none w-full py-3 px-3' placeholder='password' readOnly>
        </input>
     </div>
     </div>
    </>
  )

  }
export default App
