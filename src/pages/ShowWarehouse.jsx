import React from 'react'
import { LongCardWarehouse } from '../components/LongCard'
import Navbar from '../components/Navbar'

export default function ShowWarehouse() {
    const pathName = window.location.pathname
    const item=pathName.split('/')[4]
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <h1 className='self-center text-lg font-bold'>Warehouses Available For:{item} </h1>
        <div className='flex flex-row justify-evenly flex-wrap'>
                <LongCardWarehouse/>
                <LongCardWarehouse/>
        </div>
    </div>
  )
}
