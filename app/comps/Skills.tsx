import React from 'react'

export default function Skills() {
    return (
        <div className='mt-28 mb-24' id='skills'>
            <div className='my-20'>
                <p className='font-extrabold text-3xl'>SKILLS</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-16 mx-6'>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-purple-800 dark:text-white">Development - (NextJS)</span>
                        <span className="text-sm font-medium text-purple-800 dark:text-gray-400">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-purple-800 h-2.5 rounded-full w-[80%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-purple-800 dark:text-white">Project Managment</span>
                        <span className="text-sm font-medium text-purple-800 dark:text-gray-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-purple-800 h-2.5 rounded-full w-[85%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-purple-800 dark:text-white">Design</span>
                        <span className="text-sm font-medium text-purple-800 dark:text-gray-400">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-purple-800 h-2.5 rounded-full w-[75%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-purple-800 dark:text-white">Leadership</span>
                        <span className="text-sm font-medium text-purple-800 dark:text-gray-400">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-purple-800 h-2.5 rounded-full w-[90%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-purple-800 dark:text-white">Typescript</span>
                        <span className="text-sm font-medium text-purple-800 dark:text-gray-400">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-purple-800 h-2.5 rounded-full w-[90%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-purple-800 dark:text-white">Tailwind CSS</span>
                        <span className="text-sm font-medium text-purple-800 dark:text-gray-400">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-purple-800 h-2.5 rounded-full w-[90%]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
