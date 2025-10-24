'use client'
import { BtnGradient } from '@/components/common/buttons/BtnGradient';
import { BtnOutline } from '@/components/common/buttons/BtnOutline';
import React from 'react';

export const Navbar = () => {


    const handleLogin=()=>{
        console.log('login');
    }

    const handleSignup=()=>{
        console.log('signup');
    }



  return (
    <div className='bg-[#FFF8EF] shadow-lg'>
      <div className='flex justify-between items-center container mx-auto'>
        <div className=''>
            logo will be here
        </div>
        <div className='flex items-center gap-5 py-7'>
            <p className='cursor-pointer'>Features</p>
            <p className='cursor-pointer'>How it works</p>
            <p className='cursor-pointer'>Admin</p>
            <p className='cursor-pointer'>Team</p>
            <p className='cursor-pointer'>FAQ</p>
        </div>
        <div className='flex gap-3'>
            <BtnOutline onClick={handleLogin} label='log in'/>
            <BtnGradient onClick={handleSignup} label='Try Chat'/>
        </div>
      </div>
    </div>
  );
};