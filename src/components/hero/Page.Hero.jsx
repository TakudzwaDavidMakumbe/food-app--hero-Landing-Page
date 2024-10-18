import React from 'react'
import hero from  '../Navbar/hero.jpg'


function PageHero() {
  return (
    <div style={{backgroundImage:`url(${hero})`}} className='bg-fixed bg-cover   hero w-full h-[100vh] '>
      <div className="container">
        <div className='content flex flex-col relative h-full m-auto max-width:1240px justify-center z-[10] pt-[15em] px-[10rem] max-sm sm:left-0'>
          <div className='text'>
            <p className='  font-bold text-2xl font-mono'>Always</p>
          </div>
          <h1 className='font-sans text-[5rem] max-w-[740px] lg:text-[3em] font-bold'>Served Fresh</h1>
          <h1 className='font-sans text-[5rem] max-w-[740px] lg:text-[3em] font-bold'>Daily</h1>
           <div className=" flex gap-5 mt-5 max-h-10">
           <button className="hover:scale-100 active:transition-all hover:bg-green-950 hover:text-white duration-150 sca pt-2 p-3 items-center justify-center flex text-[#000] bg-transparent border-black border  rounded-[25px] font-semibold  ">
            Delivery
          </button>
          <button className=" hover:scale-100  hover:bg-green-950 hover:text-white duration-150 sca pt-2 p-3 items-center justify-center flex  text-[#000] bg-transparent border border-black rounded-[25px] font-semibold  ">
            Take-Away
          </button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default PageHero
