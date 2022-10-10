import React from 'react'

import { CloudArrowUpIcon, CircleStackIcon, PaperAirplaneIcon, ServerIcon } from '@heroicons/react/24/solid'
import cyber from '../assests/cyber-bg.png'

const Hero = () => {
  return (
         <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between cursor-default'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>A Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-xl'>For all your cloud services.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4 hover:bg-blue-600 hover:text-white'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={cyber} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p className='font-normal underline'>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-600'><CloudArrowUpIcon className='h-6 text-black mr-2' /> App Security</p>
                    <p className='flex px-4 py-2 text-slate-600'><CircleStackIcon className='h-6 text-black mr-2' /> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-600'><ServerIcon className='h-6 text-black mr-2' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-600'><PaperAirplaneIcon className='h-6 text-black mr-2' /> API</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero