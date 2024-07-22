// import React from 'react'

const Circle = (props) => {
  return (
    <>
        <div className="text-teal-400 bg-gray-900 w-[300px] h-[300px] p-12 rounded-full border-[30px] border-teal-600 font-bold flex  animate-bounce justify-center items-center  ">
            <h1 className="text-2xl text-white">{props.title}</h1>
        </div>
    </>
  )
}

export default Circle
