import React from 'react'
import { Badge } from '@/components/ui/badge'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";

const HowItWorks = () => {
  return (
    <section className='max-w-[1400px] mx-auto mt-20 mb-55'>
    <div className='my-20'>
        <Badge variant="outline">How It Works</Badge>
        <h2 className='text-4xl lg:text-6xl font-semibold tracking-tighter mt-6'>Your Firm’s Website in Minutes</h2>
        <p className='mt-8'>Build Your Law Firm’s Website in 3 Easy Steps</p>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
      <div className='bg-[#e7e7e7] p-12 rounded-[24px]'>
        <TbCircleNumber1 className='mb-6 text-3xl font-[#0a0a0a]' />
        <h3 className='text-xl font-[600] font-[#0a0a0a] tracking-tighter mb-4'>Pick a Template</h3>
        <p>Choose a starting point from our collection of professionally designed templates.</p>
      </div>
      <div className='bg-[#e7e7e7] p-12 rounded-[24px]'>
        <TbCircleNumber2 className='mb-6 text-3xl font-[#0a0a0a]' />
        <h3 className='text-xl font-[600] font-[#0a0a0a] tracking-tighter mb-4'>Customize Your Site</h3>
        <p>Add your logo, practice areas, and attorney profiles with our simple drag-and-drop editor.</p>
      </div>
      <div className='bg-[#e7e7e7] p-12 rounded-[24px]'>
        <TbCircleNumber3 className='mb-6 text-3xl font-[#0a0a0a]' />
        <h3 className='text-xl font-[600] font-[#0a0a0a] tracking-tighter mb-4'>Go Live!</h3>
        <p>Publish your site with a single click—hosting, security, and mobile responsiveness are all included.</p>
      </div>
    </div>
    </section>
  )
}

export default HowItWorks