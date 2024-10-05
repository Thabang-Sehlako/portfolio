import React from 'react'

import NavBar from './NavBar'
import Carousel from './Carousel'
import About from './About'
import Services from './Services'
import Gallery from './Gallery/Gallery'
import Footer from './Footer'
import Contact from './Contact'


const Makeup = () => {
  return (
    <div className='text-black'>
      <NavBar />
      <Carousel />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />

    </div>
  )
}

export default Makeup
