import React from 'react'
import {FaPhone} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import {MdLocationPin} from 'react-icons/md'

export default function Contacts() {
  return (
    <div className='mb-20' id='contacts'>
        <div className='my-20'>
            <p className='font-extrabold text-3xl'>Contacts</p>
        </div>
        <div className='flex flex-row justify-around text-xl'>
          
          <div className='flex flex-col space-y-4 items-center'>
            <div>
              <FaPhone className='text-purple-700  text-3xl'/>
            </div>
            <span>+923156678917</span>
          </div>

          <div className='flex flex-col space-y-4 items-center'>
            <div>
              <GrMail className='text-purple-700  text-3xl'/>
            </div>
            <span>shamraizPervaiz433@gmail.com</span>
          </div>

          <div className='flex flex-col space-y-4 items-center'>
            <div>
              <MdLocationPin className='text-purple-700  text-3xl'/>
            </div>
            <span>Islamabad, Pakistan</span>
          </div>

        </div>
    </div>
  )
}
