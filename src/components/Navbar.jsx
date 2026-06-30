import React from 'react'
import { Search, ShoppingCartIcon, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-8 bg-[#1A1A1A] backdrop-blur-2xl h-14'>
          <div className=' flex items-center gap-4 text-sm'>
          <h1 className='text-2xl pr-4'>SUKOI</h1>
          <a href="">Home</a>
          <a href="">Categories</a>
          <a href="">About Us</a>
          <a href="">Customer support</a>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='w-full flex item-center bg-[#0A0A0A] h-8 justify-center gap-2 px-2 py-0.5'>
             <Search/>
             <input type="text" className='w-full bg-transparent outline-0 border-0'/>
            </div>
            <ShoppingCartIcon/>
            <User/>

          </div>

        </nav>
  )
}

export default Navbar