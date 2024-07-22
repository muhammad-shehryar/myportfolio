// import React from 'react'

const Footer = () => {
  return (
   <>
   <div className="flex flex-col items-center justify-center gap-10 mt-10">
    <div className="flex flex-col items-center justify-center gap-4 font-bold text-white">
        <h1 className="text-7xl opacity-90">Contact Me</h1>
        <h6 className="text-2xl tracking-wide text-teal-400">Lets connect and turn your dream website/app into reality</h6>
    </div>
    <div>
    <a href="https://anus-portfolio.vercel.app/">
        <button className="p-5 font-bold text-white duration-500 bg-teal-400 rounded-md hover:bg-white hover:text-teal-400">Connect</button>
        </a>
    </div>
    </div>
   </>
  )
}

export default Footer
