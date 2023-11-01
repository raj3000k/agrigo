import React from 'react'
import logo from '../assets/images/logo-agri.png'
const LongCardImage=({field1,field2,field3,field4,field5,value1,value2,value3,value4,value5})=> {
    
  return (
    <div className='bg-[#ffde59] w-[70%] h-auto rounded-xl p-4 m-4'>
        <div className='flex flex-row justify-between items-center'>
        <img src={logo} className='h-32 w-32'/>
                <div className='flex flex-col'>
                <h1 className='text-black font-bold'>{field1}: {value1}</h1>
                <h1 className='text-black font-bold'>{field1}: {value1}</h1>
            </div>
            <div className='flex flex-row justify-between'>
            
            <div className='flex flex-col'>
                <h1 className='text-black font-bold'>{field1}: {value1}</h1>
                <h1 className='text-black font-bold'>{field1}: {value1}</h1>
            </div>
            </div>
            <div className='flex flex-row justify-between'>
            
            <div className='flex flex-col space-y-2'>
            <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold'>Verify Driver</button>
            <button className='bg-red-400 p-2 rounded-2xl text-white font-bold'>Delete Driver</button>
            </div>
            </div>  

        </div>
    </div>
  )
}

export default LongCardImage