import React from 'react'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const Section2 = () => {

  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["WE ARE", "MI SMO", "NOUS SOMMES"],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true
    })
  })
  return (
    <div className='section4 py-10 bg-fixed text-[#273477] w-full flex items-center justify-center'>
      <div className='w-11/12  flex'>
        <div className='flex-1 flex flex-col'>
          <div className='ml-16 w-fit mt-16 mb-7 font-bold text-2xl uppercase pb-4 border-b-4 border-[#273477] '>
            <span ref={element}></span>
            <br />
            OSM TEAM
          </div>
          <div className='ml-16 text-7xl tracking-tighter leading-tight font-bold'>
            <p>OSM is a pack of creative, analytical, and
              organized individuals who work together to find
              the best solution for their clients.</p>
          </div>
        </div>
        <div className='flex-1 flex'>
          <div className='self-end ml-60 mr-20 flex flex-col gap-5 font-medium text-xl'>
            <p>
              We are not ashamed to admit that combining design, development and marketing
              often takes every ounce of strength, energy, and creativity.
            </p>
            <p>
              Connecting different worlds has never been an easy job. That’s
              why we became OSM, we always plan 3 steps ahead.
            </p>
            <button
              className='hover:bg-[#273477] hover:text-white
             transition-colors px-6 py-1 text-base font-bold uppercase 
             self-start border-4 border-[#273477]'>
              Find out more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
