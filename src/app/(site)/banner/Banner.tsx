import { BtnGradient } from '@/components/common/buttons/BtnGradient';
import { BtnOutline } from '@/components/common/buttons/Button';
import React from 'react';

export const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-1/2'>
        <h1>Your University, One
Question away.</h1>
        <p>Ask about fees, departments, locations, bus schedules, contacts, admissions & more. Upload PDFs and our AI learns automatically — with cited answers and relevant images.</p>
        <div className='flex gap-5'>
            <BtnGradient label='Start Asking'/>
            <BtnOutline label='Explore Features'/>
        </div>
        <div>

        </div>
      </div>
      <div className='w-1/2'></div>
    </div>
  );
};
