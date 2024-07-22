// import React from 'react'
import logo from "./image/images-removebg-preview-removebg-preview.png"

const Nav = () => {

  return (
    <>
        <div className="text-white font-bold flex justify-between items-center px-12 h-[15vh]">
            <div className="flex items-center gap-6">
                <img src={logo} alt="" className="w-16" />
                <h3 className="opacity-90 animate-bounce">Muhammad Shehryar</h3>
            </div>
            <div >
                <ul className="flex gap-5 font-medium cursor-pointer">
                    <li className="p-2 duration-500 opacity-80 hover:bg-gray-700 rounded-xl active:bg-gray-800 ">Home</li>
                    <li className="p-2 duration-500 opacity-80 hover:bg-gray-700 rounded-xl">Features</li>
                    <li className="p-2 duration-500 opacity-80 hover:bg-gray-700 rounded-xl">Projects</li>
                    <li className="p-2 duration-500 opacity-80 hover:bg-gray-700 rounded-xl">Skills</li>
                    <li className="p-2 duration-500 opacity-80 hover:bg-gray-700 rounded-xl">Experience</li>
                    <li className="p-2 duration-500 opacity-80 hover:bg-gray-700 rounded-xl">Contact</li>
                </ul>
            </div>

        </div>
    </>
  )
}

export default Nav
