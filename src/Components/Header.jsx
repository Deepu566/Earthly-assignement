import React from 'react'
import Img1 from "../utillities/HeaderImg1.webp"
import Img2 from "../utillities/HeaderImg2.svg"
import Img3 from "../utillities/HeaderImg3.svg"
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
                            <a href="#section1">
                                <ImArrowDown2 className='animate-bounce cursor-pointer text-black text-5xl' />
                            </a>
                        </div>
                        <div className='text-1xl font-extrabold text-center italic '>
                            <p>*Awesome /ˈoːs(ə)m/ [adjective - extremely impressive or daunting]</p>
                            <p>“Inventing new words shows creativity and vision.” - Barney Stinson</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed left-5 top-3 bg-black h-16 px-4 py-2 text-white w-20'>
                <span className='text-[18px]' opacity-50 >we</span>
                <span className='text-[10px]'>are</span><br />
                <span className='leading-3 text-2xl'>OSM</span >
            </div>
            <div className="fixed z-30 h-60 object-cover right-0 top-52">
                <img className='h-full w-full' src="https://weareosm.com/wp-content/uploads/2020/03/ele_toptenbadge_A-2.svg" alt="" />
            </div>
            <div className='h-12 w-12 fixed z-30 left-5 top-[450px]'>
                <img src={Img1} className='h-full w-full  ' alt="" />
            </div>
            <div className='h-12 w-12 fixed z-30 left-5 top-[520px]'>
                <img src={Img2} className='h-full w-full' alt="" />
            </div>
            <div className='h-14 w-14 fixed z-30 right-5 top-[500px]'>
                <img src={Img3} alt="" />
                <div className='flex flex-col underline uppercase text-[10px] font-bold mt-5'>
                    <a href="">Instagram</a>
                    <a href="">Facebook</a>
                    <a href="">LinkedIN</a>
                    <a href="">Joberty</a>
                </div>
            </div>
            <div className='fixed z-30 left-5 text-center top-[550px] text-8xl font-extrabold'>
                c
                <div className=' h-0 w-0 absolute top-14 left-5  rounded-full border-8 border-red-900 '></div>
            </div>

        </div>
    )
}

export default Header
