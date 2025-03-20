import React from 'react'
import './App.css'
import TopHeader from './Components/TopHeader/TopHeader'
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/Herosection/Herosection'
import WelcomeSection from './Components/WelcomeSection/WelcomeSection'
import AboutSection from './Components/AboutSection/AboutSection'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'
// import Sitemaintenance from './Components/Sitemaintenance/Sitemaintenance'

function App() {
 
  return (
    <>
     <TopHeader/>
     <Navbar/>
     <Herosection/>
     <WelcomeSection/>
     <AboutSection/>
     <ContactUs/>
     <Footer/>
     {/* <Sitemaintenance/> */}
    </>
  )
}

export default App
