import React from 'react'
import { Navbar } from '../custom/Navbar'
import Footer from '../custom/Footer'
import HowItWorksHero from '../custom/HowItWorksHero'
import HowItWorksSteps from '../custom/HowItWorksSteps'
import HowItWorksFeatures from '../custom/HowItWorksFeatures'
import { Marquee } from '../custom/Marquee'
import TemplateCTA from '../custom/TemplateCTA'

const page = () => {
  return (
    <main className='mx-6'>
        <Navbar />
        <HowItWorksHero />
        <HowItWorksSteps />
        <Marquee />
        <HowItWorksFeatures />
        <TemplateCTA />
        <Footer />
    </main>
  )
}

export default page