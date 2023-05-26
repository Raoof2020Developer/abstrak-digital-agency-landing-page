import React from "react"
import About from "./components/About/About"
import CaseStudy from "./components/CaseStudy/CaseStudy"
import Clients from "./components/Clients/Clients"
import Contact from "./components/Contact/Contact"
import Estimate from "./components/Estimate/Estimate"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Portfolio from "./components/Portfolio/Portfolio"
import Pricing from "./components/Pricing/Pricing"
import Services from "./components/Services/Services"
import Stories from "./components/Stories/Stories"
import Testimonial from "./components/Testimonial/Testimonial"


const App = () => (
  <React.Fragment>
    <Header />
    <Hero />
    <Services />
    <Features />
    <About />
    <Portfolio />
    <CaseStudy />
    <Testimonial />
    <Pricing />
    <Clients />
    <Stories />
    <Contact />
    <Estimate />
    <Footer />
  </React.Fragment>
)

export default App
