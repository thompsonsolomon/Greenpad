import React from 'react'
import Header from "../components/common/header/Header";
import Home from "../components/home/Home";
import HomeSec from '../components/home/HomeSec';
import Footer from "../components/common/footer/Footer"
import About from '../components/About/About';
import AboutSec from '../components/About/AboutSec';
import Medial from '../components/Medial/Medial';
import Team from '../components/Team/Team';
import Donate from '../components/Donate/Donate';
import Contact from '../components/Contact/Contact';

export default function HomeCon() {
  return (
    <div>
      <Header />
      <Home />
      <HomeSec />
      <Footer />
    </div>
  )
}
export const AboutCon =() =>  {
  return (
    <div>
      <Header />
      <About />
      <AboutSec />
      <Footer />
    </div>
  )
}
export const MedialCon =() =>  {
  return (
    <div>
      <Header />
      <Medial />
      <Footer />
    </div>
  )
}
export const TeamCon =() =>  {
  return (
    <div>
      <Header />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
export const DonateCon =() =>  {
  return (
    <div>
      <Header />
      <Donate />
    </div>
  )
}

