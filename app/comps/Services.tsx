import React from 'react'
import {DiBrackets} from 'react-icons/di'
import {MdDesignServices} from 'react-icons/md'
import {SiDataverse} from 'react-icons/si'
import {SiGooglemarketingplatform} from 'react-icons/si'
import {SiGoogleoptimize} from 'react-icons/si'
import {ImMagicWand} from 'react-icons/im'

export default function Services() {
  return (
    <div className='mb-24' id='services'> 
        <div className='my-20'>
            <p className='font-extrabold text-3xl'>SERVICES</p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12'>
            <div className='flex flex-col items-center '>
                <DiBrackets className='text-7xl text-purple-800 mb-4' />
                <p className='font-bold'>Development</p>
                <p className='text-gray-400'>

                </p>
            </div>
            <div className='flex flex-col items-center '>
                <MdDesignServices className='text-7xl text-purple-800 mb-4' />
                <p className='font-bold'>UI/UX</p>
            </div>
            <div className='flex flex-col items-center '>
                <SiDataverse className='text-7xl text-purple-800 mb-4' />
                <p className='font-bold'>Metaverse</p>
            </div>
            <div className='flex flex-col items-center '>
                <SiGooglemarketingplatform className='text-7xl text-purple-800 mb-4' />
                <p className='font-bold'>Marketing</p>
            </div>
            <div className='flex flex-col items-center '>
                <SiGoogleoptimize className='text-7xl text-purple-800 mb-4' />
                <p className='font-bold'>SEO</p>
            </div>
            <div className='flex flex-col items-center '>
                <ImMagicWand className='text-7xl text-purple-800 mb-4' />
                <p className='font-bold'>QA</p>
            </div>
        </div>
    </div>
  )
}
