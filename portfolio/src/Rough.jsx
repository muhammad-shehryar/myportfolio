// import React from 'react'
import { PiArrowUpFill } from "react-icons/pi";
import { FaReact } from "react-icons/fa";

const Experience = () => {
  return (
   <>
    <div className="flex items-center gap-16">
            <div className="text-white bg-gray-950 max-w-[600px] p-8 flex flex-col gap-6 rounded-xl z-10 h-[200px]">
                <h1 className="text-3xl font-bold">Bidverse</h1>
                <h6 className="tracking-widest text-white opacity-100">Bidding App for buying and selling of products</h6>
                <h6 className="tracking-wide text-red-600">Tech: Flutter, NodeJS, MongoDB, Provider</h6>
            </div>
            <div>
            <div className="bg-white h-[200px] text-white w-[5px]  ">
            <PiArrowUpFill className="absolute left-[715px] rotate-90 mt-4 text-2xl" />
            <FaReact className="absolute p-2 text-6xl rounded-full bg-gray-950 left-[765px] mt-20"/>
            
            </div>
            </div>
            <div>
                <h6 className="text-2xl text-white opacity-80">April 2023 - July 2023</h6>
            </div>
    </div>
   </>
  )
}

export default Experience
