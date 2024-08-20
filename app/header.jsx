import React from 'react'
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className='absolute inset-0 bg-transparent h-[94px] z-20'>
        <div className='h-full flex flex-row justify-between items-center container'>
            <div className='font-normal text-cerreneLightGreen text-2xl'>cerrene.</div>

<nav className='lg:flex lg:flex-row flex-col justify-center  items-center gap-[60px] font-light capitalize font-satoshi'>
    <Link href='/about'>about</Link>
    <Link href='/services'>services</Link>
    <Link href='/blog'>blog</Link>
    <Link href='/contact' className='text-white bg-cerreneOrange w-[138px] h-[54px] flex items-center justify-center' >contact us</Link>
    </nav>

        </div>
        
    </header>
  )
}

export default Header