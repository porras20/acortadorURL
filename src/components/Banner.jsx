import React from 'react'
import imgWorking from '../../public/illustration-working.svg'
export default function Banner() {
  return (
    <div className='flex w-full mt-20 mb-5'>
        <div className='flex-1'>
            <h2 className='text-6xl font-[Poppins] font-bold text-gray-800'>More than just shorter links</h2>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui aspernatur delectus maiores consectetur odit.</p>
            <button className='mt-5 px-5 py-2 bg-cyan-500 text-white font-bold capitalize rounded-3xl cursor-pointer hover:bg-cyan-400 duration-200'>get started</button>
        </div>
        <div className='flex-1 relative bottom-10 left-20 '>
            <img src={imgWorking} alt="" />
        </div>
    </div>
  )
}
