// import React from 'react'
// import { MdOutlineMonitor } from "react-icons/md";

const Box = (props) => {
  return (
    <>
        <div className="bg-gray-950 max-w-md p-12 pb-10  rounded-lg flex flex-col gap-3 shadow-xl shadow-teal-900">
        <span className="text-5xl duration-200 cursor-pointer hover:text-teal-400">{props.icon}</span>
        <h3 className="text-teal-400 text-4xl">{props.title}</h3>
        <h6 className="font-semibold">{props.des}</h6>
        </div>
    </>
  )
}

export default Box
