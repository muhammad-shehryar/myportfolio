// import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Banner from "./image/Screenshot_2024-03-04_170616-removebg-preview.png";

const Hero = () => {
  return (
    <>
      <div className="text-white flex  justify-between items-center py-[120px] ">
        <div className="flex-col pl-20">
          <h3 className="text-2xl font-extrabold opacity-80 ">Welcome to Digital World</h3>

          <h1 className="text-5xl font-extrabold leading-loose tracking-widest" > Hi,I am <span className="text-teal-400 animate-bounce"> Shaheryar</span></h1>
          <h1 className="text-5xl font-extrabold leading-loose tracking-widest">a Software Developer</h1>
          <h3 className="my-10 text-2xl font-bold opacity-80">Find me at</h3>
          <div className="flex gap-8">
            <FaFacebookF className="p-3 shadow-lg text-7xl bg-gray-950 hover:text-teal-300 shadow-teal-400"/>
            <FaLinkedinIn className="p-3 shadow-lg text-7xl bg-gray-950 hover:text-teal-300 shadow-teal-400"/>
            <FaGithub className="p-3 shadow-lg text-7xl bg-gray-950 hover:text-teal-300 shadow-teal-400"/>
          </div>
        </div>
        <div>
          <img src={Banner} alt="" className="scale-140"/>
        </div>
      </div>
    </>
  );
};

export default Hero;
