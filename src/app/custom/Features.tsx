import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GridCards } from './GridCards';

export const Features = () => {
  return (
    <section className='max-w-[1400px] mx-auto'>
        <div className='my-20'>
            <Badge variant="outline">Features</Badge>
            <h2 className='text-4xl lg:text-6xl font-semibold tracking-tighter mt-6'>Everything You Need Online</h2>
            <p className='mt-8'>Powerful tools and tailored features built with busy attorneys in mind.</p>
        </div>
        <GridCards />
    </section>
  )
}
