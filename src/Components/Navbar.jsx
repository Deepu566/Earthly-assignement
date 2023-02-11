import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion"
const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div>
            <GiHamburgerMenu onClick={() => setNav(!nav)} className='text-3xl cursor-pointer fixed right-3' />
            <motion.div
                animate={{ x: nav ? -450 : 0 }}
                className=' fixed z-50
                right-[-450px] h-screen w-2/6 bg-black'>

                <div>
                    <AiOutlineClose onClick={() => setNav(false)} className='text-white absolute right-2 text-3xl font-bold cursor-pointer hover:text-green-500' />
                </div>
                <div className=' uppercase child:transition-all
                         text-white px-8 child:mb-3 child:cursor-pointer child-hover:text-green-600 font-extrabold py-10 text-7xl'>
                    <div className='text-green-600'>Home</div>
                    <div>our story</div>
                    <div>work</div>
                    <div>service</div>
                    <div>blog</div>
                    <div>content</div>
                    <div>jobs</div>
                </div>
            </motion.div>
        </div >
    )
}

export default Navbar
