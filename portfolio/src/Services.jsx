// import React from 'react'

import Experience from "./Experience"
import Experience2 from "./Experience2"
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";


const Services = () => {
  return (
    <>
    <div className="flex flex-col gap-10 mt-10">
        <div className="flex flex-col gap-6 ml-20">
            <h3 className="text-3xl font-semibold text-teal-400">Services I have provided</h3>
            <h1 className="text-5xl font-extrabold text-white opacity-80">Experience</h1>
        </div>
        <div className="flex flex-col ">
            <Experience title="Bidverse" des="Bidding App for buying and selling of products" tech="Tech: Flutter, NodeJS, MongoDB, Provider" date="April 2023 - July 2023" icons= <IoLogoJavascript />
/>
            <Experience2 title="Qpay" des="An application allowing its users to pay for their shopping using QR Code" tech="TTech: Flutter, Firebase, Provider" date="July 2022 - August 2022" icons=<FaReact />
              
            />
            <Experience title="Zeni" des="A Company Dashboard for the asset and employee managment" tech="Tech: React, NodeJS, Redux" date="August 2022 - Present" 
              icons=<SiTailwindcss /> 
            />
            <Experience2 title="Mithoo" des="A website for buying pets and their accessories. " tech="Tech: React, NodeJS, SQL" date="July 2022 - August 2022"
              icons=<IoLogoCss3 />
            />
           
        </div>
        <div>
           <hr className="mx-auto border-teal-400 w-[90%]"/>
        </div>
        </div>
    </>
  )
}

export default Services
