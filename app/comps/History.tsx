import React from 'react'

export default function History() {
    return (
        <div id='history'>
            <div className='my-20'>
            <p className='font-extrabold text-3xl'>History</p>
            </div>
            <ol className="relative border-l border-gray-200 dark:border-purple-700">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">NextJS</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Design Focused Work</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Working with the fundamentals of User-Interface designing, also worked with Chakra UI/ Material UI etc.</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2021</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ReactJS</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2021</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Front-End libraries for CSS</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Started working with the famous CSS libraries, such as Bootstrap. Worked with Flexbox, Sass and Grid</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2020</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Backbone.JS</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Backbone.js is a JavaScript rich-client web app framework based on the model–view–controller design paradigm, intended to connect to an API over a RESTful JSON interface.</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2019</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Started Cloning Famous Websites</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Self-taught myself HTML-5, CSS-3 and vanila javascript and started designing and cloning the front-end of famous websites</p>
                </li>
            </ol>

        </div>
    )
}
