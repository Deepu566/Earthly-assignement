import React from 'react'

const Section2 = () => {
  return (
    <>
      <div className='py-10 text-[#306D76] w-full flex items-center justify-center bg-[#c7e6e2]'>
        <div className='w-11/12 h-5/6 flex'>
          <div className='flex-1 flex justify-center items-center '>
            <div className='ml-16 text-4xl tracking-tight font-bold'>
              <p>Not sure how to start your outsourcing journey?
                Just pick a service suits your current needs:</p>
            </div>
          </div>
          <div className='flex-1'>
            <div className='mt-16 ml-60 mr-20 flex flex-col gap-5 font-medium text-xl'>
              <p>
                Get a team that will work exclusively on your project, or extend your
                in-house team with that one team member you were missing.
              </p>
              <p>
                Retain the control over the project, but leave all the hassles to us.
              </p>

              <button
                className='hover:bg-[#306D76] hover:text-white
             transition-colors px-6 py-1 text-base font-bold uppercase 
             self-start border-4 border-[#306D76]'>
                Find out more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='section4 py-10 text-[#273477] w-full flex items-center justify-center'>
        <div className='w-11/12  flex'>
          <div className='flex-1 flex flex-col'>
            <div className='ml-16 w-fit mt-16 mb-7 font-bold text-2xl uppercase pb-4 border-b-4 border-[#273477] '>
              NOUS SOMME|
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
    </>
  )
}

export default Section2
