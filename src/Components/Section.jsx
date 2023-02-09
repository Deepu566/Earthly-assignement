import React from 'react'

const Section = () => {
    return (
        <>
            <div className='py-10 text-[#15682E] w-full flex items-center justify-center bg-[#c7e6e2]'>
                <div className='w-11/12 h-5/6 flex'>
                    <div className='flex-1'>
                        <div className='ml-16 w-fit mt-16 mb-7 font-bold text-2xl uppercase pb-4 border-b-4 border-[#15682E] '>
                            About Us
                        </div>
                        <div className='ml-16 text-8xl tracking-tight font-bold'>
                            <p>We build engineering teams that will bring your vision to life.</p>
                        </div>
                    </div>
                    <div className='flex-1 flex'>
                        <div className='self-end ml-60 mr-20 flex flex-col gap-5 font-medium text-xl'>
                            <p>
                                We can agree that software development is not an easy job.
                                That’s why we want just all-stars on our team, talented individuals
                                that have the needed expertise,
                                but also the desire to grow.
                            </p>
                            <p>
                                OSM gathered professionals from the world of development, design, and marketing to help our clients reach their wildest goals together.
                            </p>
                            <p>
                                Yes – we provide outsourcing services,
                                but we collaborate closely with our clients.
                                We act like business partners, not just as vendors.
                                We choose our employees carefully, and take good
                                care of them. That way we ensure that everybody is happy and motivated
                                – and then results come naturally!
                            </p>
                            <button
                                className='hover:bg-[#15682E] hover:text-white
                         transition-colors px-6 py-1 text-base font-bold uppercase 
                         self-start border-4 border-[#15682E]'>
                                Find out more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section3 bg-contain bg-fixed py-10  text-[#306D76]  w-full flex items-center justify-center '>
                <div className='w-11/12 h-5/6 flex ' >
                    <div className='flex-1'>
                        <div className='ml-16 w-fit mt-16 mb-7 font-bold text-2xl uppercase pb-4 border-b-4 border-[#306D76] '>
                            Outsourcing <br /> Services
                        </div>
                        <div className='ml-16 text-7xl tracking-tight font-bold'>
                            <p>We'll provide you with outsourced software engineering teams that build world-class software.</p>
                        </div>
                    </div>
                    <div className='flex-1 flex'>
                        <div className='self-end ml-60 mr-20 flex flex-col gap-5 font-bold text-xl'>
                            <p>
                                OSM offers customized outsourcing services that will perfectly
                                fit your business needs: hire an entire development team, or an
                                experienced individual.
                            </p>
                            <p>
                                We have over a decade of experience in gathering exceptional teams that
                                make awesome software, and a great pool of talents we work with.
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
        </>

    )
}

export default Section
