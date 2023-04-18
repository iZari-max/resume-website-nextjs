import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='container h-[100vh] flex flex-col justify-center items-center' id='about'>
        <div className='w-1/2 space-y-8'>
        <div className='flex justify-start'>
        <p className='font-extrabold text-7xl '>Hello,</p>
        </div>
        <div>
        <p className=' text-gray-400'>
          Shamraiz Masih, a Front-End Developer! from Islamabad, Pakistan. A leaner & teacher of the emerging Web-Tech Next.Js 13. Building Web apps using diverse technologies! 
        </p>
        </div>
        <div className='flex flex-row space-x-2'>
            <button className='font-bold border-white border-2 px-8 py-3 purple'><span>PORTFOLIO</span></button>
            <button className='font-bold border-white border-2 px-8 py-3 white'><span>HIRE ME</span></button>
        </div>
        </div>
    </div>
  )
}
