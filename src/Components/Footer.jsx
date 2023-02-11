import React from 'react'

const footer = () => {
    return (
        <div className="h-[130vh] bg-fixed flex justify-center py-10 bg-contain  bg-[url('https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]">
            <div className='w-[85%] flex gap-28 h-5/6'>
                <div className='flex flex-col gap-8 text-white px-20 py-16 w-[35%] h-[90%] my-10 bg-black'>
                    <h1 className='text-6xl  font-extrabold'>Make<br /> the first<br /> step.</h1>
                    <p>We promise a quick response. If you want to win new business goals, you need fearless and brave people on your side. People who are hungry for success and glory. </p>
                    <div className='flex justify-center gap-5  font-extrabold'>
                        <button className='border-4 uppercase  border-orange-500 text-orange-300 px-5 py-2
                          hover:bg-orange-500 hover:text-black transition-all'>
                            Email Us
                        </button>
                        <button className='uppercase  border-4 border-orange-500
                         text-orange-300 px-5 py-2 hover:bg-orange-500 hover:text-black
                          transition-all'>
                            Call US
                        </button>
                    </div>
                </div>
                <div className='w-[50%] text-white px-20 py-16 flex gap-14  bg-black'>
                    <div className='flex flex-col gap-10'>
                        <ul className='footer-ul'>
                            <h1>  Design Services.</h1>
                            <li>Brand Development</li>
                            <li>UI/IX Services</li>
                        </ul>
                        <ul className='footer-ul'>
                            <h1>  Development Services </h1>
                            <li>Website Development</li>
                            <li>Mobile App Development</li>
                            <li>Web App Development</li>
                            <li>QA Software Services</li>
                            <li>Custom Software Development</li>
                        </ul>
                        <ul className='footer-ul'>
                            <h1>  Outsourcing Services </h1>
                            <li>Dedicated teams</li>
                            <li>Nearshoring</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='footer-ul'>
                            <h1>Support & Maintenance Services. </h1>
                            <li>IT Support Services</li>
                            <li>Domain & Hosting</li>
                            <li>Technologies</li>
                        </ul>
                        <ul className='footer-ul'>
                            <h1> ...and, there's even more </h1>
                            <li>Out Story</li>
                            <li>Kasparovchess</li>
                            <li>Work at OSM</li>
                            <li>Write for us</li>
                            <li>Affiliate Program</li>
                            <li>COVID-19</li>
                            <li>Latest news</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
