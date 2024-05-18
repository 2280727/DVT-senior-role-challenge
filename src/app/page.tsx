"use client"
import { projetcs } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
 
export default function Page() {


  return (
    <div className='h-full grid md:grid-cols-2  '>
      <section className='grid justify-center w-[100%] px-10 py-[150px] md:border-2 border-slate-300'>
        <Image
          src={'/squ.jpg'}
          className='w-[200px] mb-6 h-[200px] '
          width={700}
          height={300}
          alt={'Background image'}
        />  
        <p className='pl-4 text-[25px] font-bold '>Phumlani Ntini</p>
        <p className='pl-6 text-[18px] rounded-full '>Software Developer</p>
        <button
          className='bg-gray-700 text-white p-1 mt-6'
        >EMAIL ME</button>
      </section>
      <section id={'work_section'} className=' px-10 py-[150px] bg-slate-300'>
        <h1 className='text-[25px] mb-6 font-bold'>My Work</h1>
         <p> This portfolio showcases a collection of my personal projects,
            each accompanied by their respective Git repositories.
            All the work and code here are public.
            The projects are listed with their respective tech stacks.
            Detailed walkthroughs for each project can be found in the README files within their Git repositories.
          </p>

         {projetcs.map((projetc) => (
            <section key={projetc.name} className='pt-6 grid md:grid-cols-2 justify-center'>
              <div className='flex flex-col mb-6'>
                <p className='font-bold mb-4'>{projetc.name}</p>
                <button className='bg-gray-700 text-white md:h-[35px] p-1 mb-2'>
                  <Link href={projetc.webisite}>
                      Go now  
                  </Link>
                </button>
                <button  className='bg-gray-700 text-white md:h-[35px]  p-1 '>
                  <Link href={projetc.github}>
                  GitHub
                  </Link>
                </button>
              </div>
              <div  className='md:px-5 '>
                <p className='font-bold mb-4'>STACK</p>
                {projetc.stack.map((lang) => (
                  <p key={lang} className='border-b-2 max-md:text-center md:border-none '>{lang}</p>
                ))}

              </div>
            </section>
         ))} 
      </section>
    </div>
  )
}