import React from 'react'
import logo from '../assets/images/logo-agri.png'


export const LongCardImage=({field1,field2,field3,field4,field5,value1,value2,value3,value4,value5})=> {
    
  return (
    <div className='bg-[#ffde59] w-full h-auto rounded-xl p-4 m-4'>
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

export const LongCardTransit=({field1,field2,field3,field4,field5,field6,value1,value2,value3,value4,value5,value6})=> {
    
    return (
      <div className='bg-[#00bf63] h-auto rounded-xl p-4 m-4 '>
          <div className='flex flex-row justify-between items-center'>
          <img src={logo} className='h-32 w-32'/>
                  <div className='flex flex-col'>
                  <h1 className='text-white font-bold text-lg'>{field1}: {value1}</h1>
                  <h1 className='text-white font-bold text-lg'>{field2}: {value2}</h1>
                  <h1 className='text-white font-bold text-lg'>{field3}: {value3}</h1>
              </div>
              <div className='flex flex-row justify-between'>
              
              <div className='flex flex-col'>
                  <h1 className='text-white font-bold text-lg'>{field4}: {value4}</h1>
                  <h1 className='text-white font-bold text-lg'>{field5}: {value5}</h1>
                  <h1 className='text-white font-bold text-lg'>{field6}: {value6}</h1>
              </div>
              </div>
              <div className='flex flex-row justify-between'>
              
              <div className='flex flex-col space-y-2'>
              <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold hover:bg-blue-800'>Track Status</button>
              <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold hover:bg-blue-800'>Complete Detail</button>
              </div>
              </div>  
  
          </div>
      </div>
    )
  }
  
