// import React from 'react'
import youtube from "./image/youtube_clone.png"
import bidverse from "./image/bidverse.png" 
import MyProject from "./MyProject"
import qpay from "./image/qpay.png"

const Projects = () => {
  return (
    <>
    <div className="flex flex-col gap-10">
    <div className="flex flex-col items-center gap-4 text-white">
        <h3 className="text-3xl font-semibold text-teal-400">Check Out My Work</h3>
        <h1 className="text-5xl font-extrabold tracking-widest opacity-80 animate-bounce">My Projects</h1>
    </div>
    <div className="flex justify-between px-10 my-8">
        <MyProject title="Youtube Clone" des="A youtube clone website having features similar to Youtube" img={youtube}/>
        <MyProject title="Bidverse" des="A Bidding application allowing its users to but and sell products at their intended prices" img={bidverse}/>
        <MyProject title="Qpay" des="An application allowing users to pay for their items using QR Code" img={qpay}/>
    </div>
    <hr className="border-teal-400 w-[90%] mx-auto" />
</div>
    </>
  )
}

export default Projects
