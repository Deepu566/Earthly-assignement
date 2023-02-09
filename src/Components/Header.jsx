import React from 'react'
import Img1 from "../utillities/HeaderImg1.webp"
import Img2 from "../utillities/HeaderImg2.svg"
import Img3 from "../utillities/HeaderImg3.svg"
// import { ImArrowDown2 } from "react-icons/fa";
import { ImArrowDown2 } from 'react-icons/im';

const Header = () => {
    return (
        <div className=' h-[120vh] bg-[#c7e6e2] font-dosis flex justify-center '>
            <div className=" flex self-end text-[#15682E] justify-center bg-[right_bottom_0rem] bg-fixed bg-cover bg-[url('https://weareosm.com/wp-content/uploads/2021/07/osmweb-25-2.webp')] h-[95%] w-full">
                <div className='mt-28 w-11/12  flex flex-col items-center '>
                    <div className=' uppercase font-extrabold '>
                        <h2 className='text-center text-5xl tracking-[8px] '>Welcome</h2>
                        <div className=' text-center   text-[200px]'>
                            <h1 className='leading-[180px] flex flex-col'>
                                <span className=''>We Are</span>
                                <span className=''>*Awesome!</span>
                            </h1>
                        </div>
                        <div className='text-center mt-8 font-bold text-2xl normal-case'>
                            Yes, literally that's our name
                        </div>
                    </div>
                    <div className='w-2/4 '>
                        <div className='flex flex-col my-5 items-center'>
                            <ImArrowDown2 className='animate-bounce cursor-pointer text-black text-5xl' />
                        </div>
                        <div className='text-1xl font-extrabold text-center italic '>
                            <p>*Awesome /ˈoːs(ə)m/ [adjective - extremely impressive or daunting]</p>
                            <p>“Inventing new words shows creativity and vision.” - Barney Stinson</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed h-60 object-cover right-0 top-52">
                <img className='h-full w-full' src="https://weareosm.com/wp-content/uploads/2020/03/ele_toptenbadge_A-2.svg" alt="" />
            </div>
            <div className='h-12 w-12 fixed left-5 top-[450px]'>
                <img src={Img1} className='h-full w-full  ' alt="" />
            </div>
            <div className='h-12 w-12 fixed left-5 top-[530px]'>
                <img src={Img2} className='h-full w-full' alt="" />
            </div>
            <div className='h-14 w-14 fixed right-5 top-[500px]'>
                <img src={Img3} alt="" />
                <div className='flex flex-col underline uppercase text-[10px] font-bold mt-5'>
                    <a href="">Instagram</a>
                    <a href="">Facebook</a>
                    <a href="">LinkedIN</a>
                    <a href="">Joberty</a>
                </div>
            </div>

        </div>
    )
}

export default Header