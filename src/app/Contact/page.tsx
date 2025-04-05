import React from 'react'
import ContactSection from '../custom/ContactSection'
import { Marquee } from '../custom/Marquee'
import TemplateCTA from '../custom/TemplateCTA'
import { Navbar } from '../custom/Navbar'
import Footer from '../custom/Footer'

const page = () => {
  return (
    <main className='mx-6'>
        <Navbar />
        <ContactSection />
        <Marquee />
        <TemplateCTA />
        <Footer />
    </main>
  )
}

export default page