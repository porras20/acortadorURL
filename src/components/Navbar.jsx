import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between'>
        <div>
            <ul className='flex gap-5  items-center'>
                <li className='text-3xl font-[Poppins] font-bold'>Shortly</li>
                <li className='text-xl text-gray-600 hover:text-black cursor-pointer duration-200'>Features</li>
                <li className='text-xl text-gray-600 hover:text-black cursor-pointer duration-200'>Pricing</li>
                <li className='text-xl text-gray-600 hover:text-black cursor-pointer duration-200'>Resources</li>
            </ul>
        </div>
        <div className='flex gap-5'>
            <button className='text-xl text-gray-600 hover:text-black cursor-pointer duration-200'>Login</button>
            <button className='text-xl text-white bg-cyan-400 px-5  rounded-3xl hover:bg-cyan-300 duration-200'>Sign up</button>
        </div>
    </div>
  )
}
