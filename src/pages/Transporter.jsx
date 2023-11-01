import React, { useEffect, useState} from 'react'
import { supabase } from '../supabase/supabase'
import { AiOutlineMenu } from "react-icons/ai";
import TransportDrawer from '../components/TransportDrawer';
import LongCardImage from '../components/LongCard';
import Navbar from '../components/Navbar';
const Transporter=()=> {
    const[drawer,setDrawer]=useState(false)
 
    
  return (
    <div className='bg-[#d8e6ed] h-full flex flex-col'>
        {/* <div className='bg-[#045930] w-full h-auto py-2 flex flex-row justify-between px-4' >
            <div className='flex flex-row'>

               <button>
               <AiOutlineMenu color='black' size={36} onClick={()=>setDrawer(!drawer)}/>
                </button> 
           
        <h1 className='text-black font-bold text-2xl justify-items-start ml-4'>User</h1>
            </div>
        <h1 className='text-black font-bold ml-4 text-2xl mr-2'>Transporter</h1>
      </div> */}
      <Navbar/>
      {drawer?
       <>
       <TransportDrawer/>
       </>
       :<></>}
       <div className='flex flex-row mt-6 p-8 justify-evenly h-full'>
        <div className='flex flex-col space-y-4 h-full'>
            <div className='bg-[#045930] w-auto h-auto p-4 rounded-xl font-bold items-center'>
                <h1 className='font-bold justify-items-center text'>Orders</h1>
            </div>
            <div className='bg-[#00bf63] w-auto h-auto p-4 rounded-xl font-bold flex flex-col space-y-2'>
               <button>
               <div className='bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center hover:bg-[#74dfab]'>
                    <h1>Rice- 5Ton</h1>
                    <h1>Location</h1>
                </div>
               </button>
               <button>
               <div className='bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center  hover:bg-[#74dfab]'>
                    <h1>ITEM</h1>
                    <h1>Quantity</h1>
                    <h1>Location</h1>
                </div>
               </button>
            </div>
            
        </div>
        <div className='flex flex-col space-y-4 h-full '>
            <div className='bg-[#00bf63] w-auto h-auto p-4 rounded-xl font-bold items-center'>
                <h1 className='font-bold justify-items-center'>Available Vehicles</h1>
            </div>
            <div className='bg-[#ffde59] w-auto h-auto p-4 rounded-xl font-bold flex flex-col space-y-2'>
               <button>
               <div className='bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center  hover:bg-[#74dfab]'>
                    <h1>Tata Ace: CG 04 HX 1234</h1>
                    
                </div>
               </button>
               <button>
               <div className='bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center  hover:bg-[#74dfab]'>
               <h1>Tata Ace: CG 04 HX 1234</h1>
                    
                </div>
               </button>
            </div>
            
        </div>
        <div className='flex flex-col space-y-4 h-full '>
            <div className='bg-[#ffde59] w-auto h-auto p-4 rounded-xl font-bold items-center'>
                <h1 className='font-bold justify-items-center'>In Transit</h1>
            </div>
            <div className='bg-[#00bf63] w-auto h-auto p-4 rounded-xl font-bold flex flex-col space-y-2'>
               <button>
               <div className='bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center  hover:bg-[#74dfab]'>
                    <h1>350 Kg</h1>
                    <h1>RICE</h1>
                    <h1>Raipur-Delhi View Details..</h1>
                </div>
               </button>
               <button>
               <div className='bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center  hover:bg-[#74dfab]'>
               <h1>1 Ton</h1>
                    <h1>RICE</h1>
                    <h1>Raipur-Delhi View Details..</h1>
                </div>
               </button>
            </div>
            
        </div>
       </div>
       
        <LongCardImage field1={'Name'} value1={"Lekhram"}/>
    </div>
  ) 
}

export default Transporter;
