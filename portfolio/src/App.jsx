// import React from 'react'
import Nav from "./Nav"
import Hero from "./Hero"
import Feature from "./Feature"
import Projects from "./Projects"
import Skills from "./Skills"
import Services from "./Services"
import Footer from "./Footer"
import Extra from "./Extra"

const App = () => {
  return (
    <>
      <div className="bg-gray-900">
        <Nav/>
        <Hero/>
        <Feature/>
        <Projects/>
        <Skills/>
        <Services/>
        <Footer/>
        <Extra/>
      </div>

    </>
  )
}

export default App
