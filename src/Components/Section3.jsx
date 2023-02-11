import React from 'react'
import { TfiLayers } from 'react-icons/tfi'
import { FiAlertTriangle } from 'react-icons/fi'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
const Section3 = () => {
    return (
        <div className='bg-[#ddf1ef] p-20 flex items-center justify-center'>
            <div className='text-[#273477] w-[80%] transition-all  flex justify-between  h-[70%]'>
                <div className='transition-all w-[31%] hover:h-[97%] hover:relative top-3  bg-[#273477] border-4  border-[#273477] '>
                    <div className='transition-all hover:h-full h-[97%] bg-[#c7e6e2]'>
                        <div className='px-10 py-8 h-full flex flex-col gap-5'>
                            <div className='text-3xl'><TfiLayers /></div>
                            <h2 className='font-bold text-5xl capitalize'>What?</h2>
                            <p className='font-medium text-lg leading-tight'>We strive to help businesses achieve exceptional growth and desired results.
                                Our specific approach and fusion of development, design, and marketing h
                                ave proven to be the best practice when it comes to end results. </p>
                        </div>
                    </div>
                </div>
                <div className='transition-all w-[31%] hover:h-[97%] hover:relative top-3  bg-[#273477] border-4  border-[#273477] '>
                    <div className=' transition-all hover:h-full h-[97%] bg-[#c7e6e2]'>
                        <div className='px-10 py-8 h-full flex flex-col gap-5 '>
                            <div className='text-3xl'><FiAlertTriangle /></div>
                            <h2 className='font-bold text-5xl capitalize'>how?</h2>
                            <p className='font-medium text-lg leading-tight'>We have brought together the most professional
                                and experienced people to provide high-quality services.
                                We have been working with clients from different industries for the last 11 years.
                                Client satisfaction is our top priority! </p>
                        </div>
                    </div>
                </div>
                <div className='w-[31%]  hover:transition-all hover:relative top-3  bg-[#273477] border-4  border-[#273477] '>
                    <div className=' transition-all hover:h-full h-[97%] bg-[#c7e6e2]'>
                        <div className='px-10 py-8 h-full flex flex-col gap-5'>
                            <div className='text-3xl font-bold'><HiOutlineQuestionMarkCircle /></div>
                            <h2 className='font-bold text-5xl capitalize'>Why?</h2>
                            <p className='font-medium text-lg leading-tight'>To be noticed in the market, you have to perform better than your competitors.
                                This means that your website or application should have a beautiful design and easy-to-use functionalities for end-users. </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section3
