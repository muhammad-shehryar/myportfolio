// import React from 'react'
// import img from "./image/youtube_clone.png"

const MyProject = (props) => {
  return (
    <>
        <div className="flex flex-col h-auto gap-3 p-6 text-white duration-1000 shadow-xl cursor-pointer bg-gray-950 max-w-96 rounded-2xl shadow-teal-700 hover:shadow-teal-500 hover:rotate-12 " >
            <img src={props.img} alt="" className="duration-300 cursor-pointer w-96 rounded-2xl hover:scale-110" />
            <h1 className="text-2xl font-bold tracking-widest hover:text-teal-400">{props.title} </h1>
            <h6 className="tracking-widest">{props.des}</h6>
        </div>
    </>
  )
}

export default MyProject
