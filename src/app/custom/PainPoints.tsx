import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const PainPoints = () => {
  return (
    <>
      <section className="max-w-[1400px] mx-auto pt-24 pb-2">
        <Badge variant="outline">Sound Like You?</Badge>
        <h2 className="text-4xl lg:text-6xl font-semibold tracking-tighter text-[#0a0a0a] mt-6">
          Why Most Law Firm Websites Fall Short
        </h2>
        <p className="mt-6 text-[#3c3c3c] max-w-3xl">
          Building a professional website shouldn’t take months or cost thousands in developer fees.
          Yet most law firms struggle with outdated designs, slow timelines, and poor client experience.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#f9f9f9] p-6 rounded-xl shadow-sm flex flex-col items-start text-[#0a0a0a]">
            <img
              src="https://placehold.co/600x400"
              alt="Expensive Developers"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl">❌ Expensive Developers</h3>
            <p className="mt-2 text-sm text-[#4f4f4f]">
              Hiring agencies or freelancers can cost $5,000–$15,000+ and still miss the mark.
            </p>
          </div>

          <div className="bg-[#f9f9f9] p-6 rounded-xl shadow-sm flex flex-col items-start text-[#0a0a0a]">
            <img
              src="https://placehold.co/600x400"
              alt="Outdated Templates"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl">❌ Outdated Templates</h3>
            <p className="mt-2 text-sm text-[#4f4f4f]">
              Most generic site builders aren’t built with law firms or legal clients in mind.
            </p>
          </div>

          <div className="bg-[#f9f9f9] p-6 rounded-xl shadow-sm flex flex-col items-start text-[#0a0a0a]">
            <img
              src="https://placehold.co/600x400"
              alt="Long Timelines"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl">❌ Long Timelines</h3>
            <p className="mt-2 text-sm text-[#4f4f4f]">
              From contracts to revisions, it can take 3–6 months just to go live.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#010101] text-white py-24 px-10 mt-16 rounded-[24px] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start lg:items-center justify-between max-w-[1400px] w-full mx-auto gap-6">
          {/* Left Content */}
          <div className="max-w-3xl">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <img src="/assets/dejurify-text-logo-white.svg" alt="Dejurify Logo" className="h-8 w-auto" />
              makes it simple.
            </h3>
            <p className="mt-4 text-md"  id="pricing-p">
              With our law-firm-optimized templates and easy drag-and-drop builder, you can launch a
              beautiful, professional website in under an hour — no coding, no contracts, no stress.
            </p>
          </div>

          {/* Right CTA Button */}
          <div>
            <Button className="px-10 py-3 cursor-pointer" variant="secondary">Get Started</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default PainPoints
