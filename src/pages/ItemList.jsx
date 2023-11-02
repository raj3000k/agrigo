import React from "react";
import Navbar from "../components/Navbar";
import fruits from '../assets/images/fruits.jpg'
import vegetables from '../assets/images/vegetables.jpg'
import rice from '../assets/images/rice.jpg'
import pulses from '../assets/images/dal.jpg'
import grains from '../assets/images/grains.jpg'
import spices from '../assets/images/spices.jpg'
import { ImageCard, ItemCard } from "../components/Cards";
import { Link } from "react-router-dom";

const ItemList=()=>{
    const pathName = window.location.pathname
    const item=pathName.split('/')[3]
    const ItemData=[
        {
          Image:fruits,
          category:'Fruits',
          url: '/distributor/category/Fruits'
        },
        {
          Image:vegetables,
          category:'Vegetables',
          url: '/distributor/category/Vegetables'
        },
        {
        Image:rice,
          category:'Rice',
          url: '/distributor/category/Rice'
        },
        {
          Image:pulses,
          category:'Pulses',
          url: '/distributor/category/Pulses'
        },
        {
          Image:grains,
          category:'Whole Grain',
          url: '/distributor/category/Grains'
        },
        {
          Image:spices,
          category:'Spices',
          url: '/distributor/category/Spices'
        },
        
      ]
    return(
        <div className="flex flex-col">
            <Navbar/>
        <h1 className="text-bold self-center text-black text-2xl">Items By Category- {item}</h1>
        <div className="flex flex-row justify-evenly m-4 flex-wrap">
        {ItemData.map((data)=>{
          return <div>
            <ItemCard image={data.Image} category={data.category} onClick={data.url}/>
          </div>
        })}
        <Link to="/distributor/category/warehouse/all">
        <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold hover:bg-[#36499e] mt-4'>Show All Warehouses</button>

        </Link>
   
      </div>
    </div>
    )
   
}

export default ItemList