'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { PanelTop, Layers, SlidersHorizontal, FileText } from 'lucide-react'
import { Navbar } from '@/app/custom/Navbar'

const Index = () => {
  return (
    <>
      <Navbar />

      <section className="relative flex flex-col bg-[#0A0A0A] text-white overflow-hidden min-h-[calc(100vh-61px)] justify-center items-center px-4 py-12 sm:py-16">
        {/* Glowing Orb Background */}
        <div className="absolute bottom-[-100px] md:bottom-[-150px] left-1/2 transform -translate-x-1/2 w-[400px] h-[150px] md:w-[800px] md:h-[250px] bg-white opacity-10 blur-3xl rounded-full z-0"></div>

        <div className="container max-w-[1400px] mx-auto relative z-10 text-center">
          <Badge variant="outline" className="text-white border-[#3c3c3c]">
            Build Faster
          </Badge>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight mt-6 mb-4">
            Create Law Firm Websites in Minutes
          </h1>

          <p className="text-[#D9D9D9] text-base md:text-lg max-w-2xl mx-auto mb-8">
            Drag, drop, customize, and publish a modern legal site without writing a single line of code.
          </p>

          <Button asChild size="lg" className="bg-white text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition mb-12 rounded-lg px-6 py-3">
            <Link href="/Builder/pages/Builder">Start Building Now</Link>
          </Button>

          {/* Feature Highlights */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-left max-w-6xl mx-auto">
            {[
              {
                icon: <PanelTop className="h-6 w-6 text-white" />,
                title: 'Section-Based Builder',
                desc: 'Stack prebuilt, professional-grade sections tailored for law firms.',
              },
              {
                icon: <Layers className="h-6 w-6 text-white" />,
                title: 'Law Firm Components',
                desc: 'Add bios, practice areas, results, and FAQs in seconds.',
              },
              {
                icon: <SlidersHorizontal className="h-6 w-6 text-white" />,
                title: 'Custom Styles',
                desc: 'Easily match your firm’s colors, fonts, and brand identity.',
              },
              {
                icon: <FileText className="h-6 w-6 text-white" />,
                title: 'SEO-Ready Pages',
                desc: 'Semantically structured for search engines and accessibility.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#1c1c1c] p-4 md:p-6 rounded-2xl shadow-md transition-all hover:scale-[1.02]"
              >
                <div className="mb-3">{icon}</div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-[#808080]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
