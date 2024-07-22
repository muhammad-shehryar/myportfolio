// import React from 'react'

import Circle from "./Circle"

const Skills = () => {
  return (
    <>
    <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-8 pl-12 mt-6 tracking-widest" >
            <h3 className="text-3xl text-teal-400">Skills I am expert at</h3>
            <h1 className="text-5xl font-bold text-white opacity-80 ">Professional Skills</h1>
        </div>
        <hr className="border-teal-400 w-[90%] mx-auto"/>
        <div className="flex flex-wrap justify-around gap-24" >
            <Circle title="HTML"/>
            <Circle title="CSS"/>
            <Circle title="JAVASCRIPT"/>
            <Circle title="REACT"/>
            <Circle title="TAILWIND"/>
            <Circle title="FIREBASE"/>
            {/* <Circle title="R"/> */}
        </div>
        </div>
        <hr  className="border-teal-400 w-[90%] mx-auto"/>
    </>
  )
}

export default Skills
