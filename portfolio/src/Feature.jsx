// import React from 'react'
import { MdOutlineMonitor } from "react-icons/md";
import { DiAndroid } from "react-icons/di";
import { FaMobileScreenButton } from "react-icons/fa6";
import Box from "./Box"

const Feature = () => {
  return (
  <>
  <div className="p-10 text-white">
    <hr  className=" border-teal-300 w-[90%] mt-6 mb-6 mx-auto" />
    <div className=" flex flex-col gap-8  h-[200px] ">
        <h3 className="text-3xl font-extrabold text-teal-500">Features</h3>
        <h1 className="text-6xl font-bold text-white-500 opacity-80">What I DO</h1>
    </div>
    <div className="flex gap-6">
        <Box title="Web Development" des="Crafting captivating digital experiences through a fusion  cutting-edge technology is my passion in web development."
            icon=<MdOutlineMonitor />
        />
        <Box title="Android Development" des="Embarking on a journey of innovation in Android development, I showcase a prowess in crafting versatile and user-centric apps."
            icon=<DiAndroid />
        />
        <Box title="IOS Development" des="Unveiling the art of innovation in iOS development, my work reflects an unwavering commitment to deliver top-tier user experiences in the Apple ecosystem"
            icon=<FaMobileScreenButton />
        />
        </div>
    </div>
    <hr className=" border-teal-300 w-[90%] mt-6 mb-6 mx-auto"/>
  </>
  )
}

export default Feature
