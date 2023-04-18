import React from 'react'
import "./Work.css"
import { GoGithubAction } from 'react-icons/go'

export default function Work() {
  return (
    <div id='work' className='mt-36'>
      <div className='my-24'>
        <p className='font-extrabold text-3xl'>WORK</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-14 mx-8'>
        <div className='flex flex-col space-y-8 items'>
          <GoGithubAction className='text-5xl text-purple-800' />
          <a href="https://github.com/iZari-max/typescript-cli-calculator" target='_blank'>
            <p className='text-lg font-semibold'>CLI Calculator <br /><span className='text-gray-700 font-medium'><i>Typescript/NodeJS</i></span>
            </p>
          </a>
        </div>
        <div className='flex flex-col space-y-8 items'>
          <GoGithubAction className='text-5xl text-purple-800' />
          <a href="https://github.com/iZari-max/typescript-atm" target='_blank'>
            <p className='text-lg font-semibold'>CLI ATM <br /><span className='text-gray-700 font-medium'><i>Typescript/NodeJS</i></span>
            </p>
          </a>
        </div>
        <div className='flex flex-col space-y-8 items'>
          <GoGithubAction className='text-5xl text-purple-800' />
          <a href="https://github.com/iZari-max/typescript-guessing-game" target='_blank'>
            <p className='text-lg font-semibold'>CLI Guessing Game <br /><span className='text-gray-700 font-medium'><i>Typescript/NodeJS</i></span>
            </p>
          </a>
        </div>
        <div className='flex flex-col space-y-8 items'>
          <GoGithubAction className='text-5xl text-purple-800' />
          <a href="https://github.com/iZari-max/typescript-todo-list" target='_blank'>
            <p className='text-lg font-semibold'>CLI Todo-List <br /><span className='text-gray-700 font-medium'><i>Typescript/NodeJS</i></span>
            </p>
          </a>
        </div>
        <div className='flex flex-col space-y-8 items'>
          <GoGithubAction className='text-5xl text-purple-800' />
          <a href="https://github.com/iZari-max/typescript-currency-converter" target='_blank'>
            <p className='text-lg font-semibold'>CLI Currency Converter <br /><span className='text-gray-700 font-medium'><i>Typescript/NodeJS</i></span>
            </p>
          </a>
        </div>
        <div className='flex flex-col space-y-8 items'>
          <GoGithubAction className='text-5xl text-purple-800' />
          <a href="https://github.com/iZari-max/typescript-word-counter" target='_blank'>
            <p className='text-lg font-semibold'>CLI Word Counter <br /><span className='text-gray-700 font-medium'><i>Typescript/NodeJS</i></span>
            </p>
          </a>
        </div>
      </div>
      <div className='my-8'>
        <span className='text-gray-700 font-sm'>follow the links to view the detailed project.</span><br />
        <span className='text-gray-700 font-sm'>All projects are available on npm.org</span>
      </div>
    </div>
  )
}
