import React from 'react'

const Section1 = () => {
    return (
        <div className='py-16 text-[#306D76] w-full flex items-center justify-center  bg-[#c7e6e2]'>
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
    )
}

export default Section1
