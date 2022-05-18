import React, { Fragment } from 'react'
import Header from '../Header/Header'
import HeroSection from '../hero-section/HeroSection'
import About from '../about/About'
import Experience from '../experience/Experience'
import Portfolio from '../portofolio/Portfolio'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Certificate from '../services/Certificate'
import Trainning from '../trainning/Trainning'
// import Map from '../map/Map'
// import MapGoogle from '../map/Map'
// import ParticleBackground from '../../ParticleBackground'
import Main from '../cover/Main'

const Layout = () => {
  return (
    <Fragment>
      <Header/>
      <HeroSection/>
      <About/>
      <Certificate/>
      <Experience/>
      {/* <Portfolio/> */}
      <Trainning/>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default Layout