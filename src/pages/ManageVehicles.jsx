import React from "react";
import { LongCardVehicle } from "../components/LongCard";
import Navbar from "../components/Navbar";
const ManageVehicles=()=>{
    return(
        <div className="flex flex-col">
        <Navbar/>
        <div className='bg-[#00bf63] w-auto h-auto p-4 rounded-xl font-bold items-center flex justify-center m-4 text-lg'>
            <h1 className='font-bold justify-items-center text-white'>Vehicle Details</h1>
        </div>
        <div className=' rounded-xl font-bold flex flex-col space-y-2 justify-center items-center mx-4'>

            <LongCardVehicle field1={'Name'} value1={'Tata Ace'} field2={'Number'} value2={'CG 04 AS 2002'} field3={'Capacity'} value3={'5 Ton'} field4={'Work Status'} value4={'Free'} value5={"Verified"} field5={'Verification'} />
            <LongCardVehicle field1={'Name'} value1={'Tata Ace'} field2={'Number'} value2={'CG 04 AS 2002'} field3={'Capacity'} value3={'5 Ton'} field4={'Work Status'} value4={'Free'} value5={"Verified"} field5={'Verification'} />
            
        </div>
    </div>
    )
   
}

export default ManageVehicles