import React from 'react'
import imageUrl from '../../public/bg-boost-desktop.svg'
export default function BoostYourLinks() {
  return (
    <div className='bg-[#2c2451] py-5 flex flex-col justify-center items-center' style={{backgroundImage: `url(${imageUrl})`}}>
        <h2 className='text-3xl text-white font-bold font-[Poppins]'>Boost your links today</h2>
        <button className='mt-4 py-2 px-6 bg-cyan-500 text-white font-bold font-[Poppins] rounded-full hover:bg-cyan-400 duration-200'>Get Started</button>
    </div>
  )
}
