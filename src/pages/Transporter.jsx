import React, { useEffect, useState} from 'react'
import { supabase } from '../supabase/supabase'
import { AiOutlineMenu } from "react-icons/ai";
import TransportDrawer from '../components/TransportDrawer';
const Transporter=()=> {
    const[drawer,setDrawer]=useState(false)
 
    
  return (
    <div className='bg-[#48626e] h-full'>
        <div className='bg-[#ffde59] w-full h-auto py-2 flex flex-row justify-between px-4' >
            <div className='flex flex-row'>

               <button>
               <AiOutlineMenu color='black' size={36} onClick={()=>setDrawer(!drawer)}/>
                </button> 
           
        <h1 className='text-black font-bold text-2xl justify-items-start ml-4'>User</h1>
            </div>
        <h1 className='text-black font-bold ml-4 text-2xl mr-2'>Transporter</h1>
      </div>
      {drawer?
       <>
       <TransportDrawer/>
       </>
       :<></>}
       <div className='mt-6 flex flex-col '>
        <div>
            <div cla></div>
        </div>
       </div>
        
    </div>
  ) 
}

export default Transporter;
