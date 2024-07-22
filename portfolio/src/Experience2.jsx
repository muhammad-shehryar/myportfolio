// import React from 'react'
import { FaReact } from "react-icons/fa";

const Experience = (props) => {
  return (
   <>
    <div className="flex flex-row-reverse  justify-between w-[90%] p-10 ml-[100px] items-center">
          <div className="text-white bg-gray-950 w-[500px] h-[200px]  text-center p-4 -tracking-widest flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold">{props.title}</h1>
            <h4 className="text-2xl">{props.des}</h4>
            <h6 className="text-xl font-semibold text-teal-400">{props.tech}</h6>
          </div>
          <div >
           <div className="flex flex-col items-center ">
           <div className="w-1 bg-white h-60 "></div>
              <span className="font-bold   border-8 rounded-full text-7xl bg-gray-950 w-[100px] h-[100px] cursor-pointer duration-150 flex justify-center items-center text-teal-400 hover:scale-110"> {props.icons}</span>
           <div className="w-1 bg-white h-60 "></div>
           </div>
          </div>
          <div className="text-white">
            <h3 className="text-2xl opacity-80">{props.date}</h3>
          </div>
    </div>
   </>
  )
}

export default Experience
