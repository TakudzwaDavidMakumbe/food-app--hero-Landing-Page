"use state"
import React, { useState } from 'react'
import { FaBars, FaHamburger } from 'react-icons/fa'

function Page() {
    const [nav, setNav] = useState(false)
    const handleNav =() => setNav(!nav)

  return (
    <div className='navbar active:left-0 max-w[740px] lg:absolute lg:left[-200%]: w-full h-[80px] border border-[#333] border-t-[0px] border-x-[0] fixed z-[2] min-w-[250px]'>
        <div className="container flex justify-between items-center w-full h-full p-[1rem]">
            <div className="">
            <FaHamburger size={40} className='ml-[4px]' />
            </div>
            {/* className="flex flex-wrap justify-center gap-4 font-serif md:justify-between" */}
            <ul className="flex gap-4 font-serif uppercase text-[1.2rem]  nav ? 'nav-menu active': 'nav-menu'">
                <li className='cursor- hover:text-primary duration-150 scale-105  p-[1rem] active:text-[2rem] active:text-[#F8F8F8] '>Home</li>
                <li className='cursor- hover:text-primary duration-150 scale-105   p-[1rem] active:text-[2rem] active:text-[#F8F8F8] '>Order</li>
                <li className='cursor- hover:text-primary duration-150 scale-105   p-[1rem] active:text-[2rem] active:text-[#F8F8F8] '>Menu</li>
                <li className='cursor- hover:text-primary duration-150 scale-105   p-[1rem] active:text-[2rem] active:text-[#F8F8F8] '>Delivery</li>
                <li className='cursor- hover:text-primary duration-150 scale-105   p-[1rem] active:text-[2rem] active:text-[#F8F8F8] '>Contact</li>
            </ul>

            {/* hamburger section */}

            <div className="humburger z-[5] cursor-pointer" onClick={handleNav} >
                <FaBars/>
            </div>

        </div>
      
    </div>
  )
}

export default Page
