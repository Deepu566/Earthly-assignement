import React from 'react'
import { CgShapeHexagon } from "react-icons/cg"


const Section4 = () => {
    return (
        <>
            <div className='py-16 text-[#B53822] flex justify-center items-center section5  bg-contain bg-fixed'>
                <div className='w-10/12 flex   h-5/6'>
                    <div className='w-[40%]' >
                        <div className='flex-1 flex flex-col'>
                            <div className=' w-fit mt-16 mb-7 font-bold text-2xl uppercase pb-4 border-b-4 border-[#B53822] '>
                                Our <br /> Services
                            </div>
                            <div className='pr-20 text-5xl tracking-tighter leading-tight font-bold'>
                                <p className=''>We believe that companies that develop applications, websites,
                                    and software need to provide more than just a code.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[60%] flex justify-center items-center  relative'>
                        <div className='absolute h-[45%] w-56 flex items-center justify-center bg-[#c7e6e2] left-0 top-45 '>
                            <CgShapeHexagon className='font-bold text-gray-400 text-9xl' />
                        </div>
                        <div className='bg-[#88d1b9] ml-24 h-4/6 pl-48 pr-10 pt-20 flex flex-col gap-10'>
                            <h1 className='text-4xl font-bold'>Development</h1>
                            <p className='text-lg leading-normal'>Whether you want to upgrade an existing site or start from the beginning,
                                we will make sure that each line of code is in place. Easy and clean code
                                is crucial for the smooth functioning of your website or application.</p>
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
            <div className='py-16 text-[#B53822] w-full flex items-center justify-center  bg-[#c498a2]'>
                <div className='w-11/12 h-5/6 flex'>
                    <div className='flex-1 flex justify-center items-center '>
                        <div className='ml-16 text-4xl tracking-tight font-bold'>
                            <p>We understand your concerns about outsourcing. We’ve
                                seen the challenges, and we’ve solved them.</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='mt-16 ml-60 mr-20 flex flex-col gap-5 font-medium text-xl'>
                            <p>
                                Being over a decade in the IT industry helps us to recognize and overcome all obstacles.
                                We  constantly seek talents for our own projects, and for our clients.
                            </p>
                            <p>
                                That’s why we see all outsourcing challenges from multiple angles, and know how to act accordingly!
                            </p>

                            <button
                                className='hover:bg-[#B53822] hover:text-white
             transition-colors px-6 py-1 text-base font-bold uppercase 
             self-start border-4 border-[#B53822]'>
                                Find out more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4
