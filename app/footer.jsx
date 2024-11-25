import React from 'react'
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className='bg-cerreneGreen h-[640px] lg:h-[720px]  relative overflow-hidden w-full'>
        <div className=' lg:h-[91px] lg:w-[91px] h-20 w-20 rotate-[52deg] gradientBall top-40 lg:top-[265px] lg:left-[291px] -left-1'></div>
        <div className='lg:h-[91px] lg:w-[91px] h-20 w-20 rotate-[52deg] gradientBall top-10 lg:top-[75px] lg:-right-10 -right-10'></div>
        <div className='lg:h-[91px] lg:w-[91px] h-[58px] w-[58px] rotate-[52deg]  gradientBall top-[320px] lg:top-[298px] lg:left-[700px] right-[60px]'></div>
        <div className='lg:h-[56px] lg:w-[56px] h-[58px] w-[58px] rotate-[79deg] gradientBall top-[508px] lg:top-[384px] lg:left-[99px]  -left-2'></div>
        <div className='font-literata text-[92px] lg:text-[368px] leading-[82%] text-cerreneLightGreen bottom-0 absolute text-center flex font-normal  w-full items-center justify-center'>cerrene.</div>
<div className='z-10 absolute inset-0 w-full h-full flex  lg:px-0  px-9'>
    <div className='  lg:mr-32 lg:ml-[137px] mx-9 h-[565px] p-20 lg:backdrop-blur-[16px] backdrop-blur-lg rounded-2xl my-auto bg-gradient-to-b from-[#ffffff0D] to-[#4C4D1633] w-full lg:h-[520px] flex'>
    <div className='lg:grid-cols-3 grid text-white font-satoshi  font-medium w-full'>
    <div className='flex flex-col lg:text-xl'>
        <Link href='mailto:hello@cerrene.com'>hello@cerrene.com</Link>
        <Link href='tel:+2347061686434'>+234 706 168 6434</Link>
    </div> 
    <div className='flex lg:flex-row flex-col justify-between font-light capitalize '>
    <Link href='/about'>about</Link>
    <Link href='/services'>services</Link>
    <Link href='/blog'>blog</Link>
    <Link href='/faqs'>faqs</Link>
    </div>
    {/* <div className=' lg:p-20'>
    <button className='animated-button text-cerreneOrange border-cerreneOrange px-6 py-2 capitalize border-2'> subscribe</button>
   
    </div> */}

</div>
        
         </div> 

</div>
    </footer>
  )
}

export default Footer