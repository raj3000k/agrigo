import React from 'react'
import '../tailwind.css'
const Welcome=()=> {
  return (
    <div className='bg-[#d8e6ed] h-full'>
      <div className='bg-[#045930] w-full h-auto py-2 flex flex-row items-end justify-between' >
        <h1 className='text-white font-bold ml-4 text-2xl justify-items-start'>AgriGo</h1>
        <div className='flex flex-row mr-4 justify-between text-white font-bold text-xl'>
          <a className='mr-2' href="/">Login</a>
          <a className='mr-2' href="/">Sign Up</a>
          <a href="/">About Us</a>
        </div>
      </div>
    <div className='flex flex-col mx-8 my-12'>
      <div className='flex flex-col w-[50%] justify-between'>
        <h1 className='font-bold text-2xl'>AgriGo</h1>
        <h1>The Cosmos</h1>
        <p className='my-4'>Welcome to the Future of Agri-food Transportation! At AgriGo, we're driving a revolution in supply chain logistics. Our Advanced Transportation Management System (ATMS)</p>
      </div>
      <div className='flex flex-col w-[50%]'>
        

      </div>
    </div>

    </div>
  )
}

export default Welcome;
