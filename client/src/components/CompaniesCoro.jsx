import React from 'react'
import Marquee from "react-fast-marquee";
import c1 from '../assets/images/companies/c1.png'
import c2 from '../assets/images/companies/c2.png'
import c3 from '../assets/images/companies/c3.png'
import c4 from '../assets/images/companies/c4.png'
import c5 from '../assets/images/companies/c5.png'
import c6 from '../assets/images/companies/c6.png'
import c7 from '../assets/images/companies/c7.png'
import c8 from '../assets/images/companies/c8.png'
import c9 from '../assets/images/companies/c9.png'
import c10 from '../assets/images/companies/c10.png'

function CompaniesCoro() {
  return (
    <div className='flex h-25 bg-gray-200'>
      <div className='text-sm text-left flex flex-col justify-center px-10 w-45'>Partners <span className='font-bold text-[20px] text-[#0d0c22]'>Trust us</span></div>
      <Marquee speed={100} gradient={false}>
        <div className='mr-20'>
          <img src={c1} alt="" className='block h-10' />
        </div>
        <div className='mr-20'>
          <img src={c2} alt="" className='block h-10' />
        </div>
        <div className='mr-20'>
          <img src={c3} alt="" className='block h-10' />
        </div>
        <div className='mr-20'>
          <img src={c4} alt="" className='block h-10' />
        </div>
        <div className='mr-20'>
          <img src={c5} alt="" className='block h-10' />
        </div>
        <div className='mr-20'>
          <img src={c6} alt="" className='block h-10' />
        </div>
        <div className='mr-20'>
          <img src={c7} alt="" className='block h-10' />
        </div>
        <div className='mr-20'>
          <img src={c8} alt="" className='block h-10' />
        </div>
        <div className='mr-20'>
          <img src={c9} alt="" className='block h-10' />
        </div>
        <div className='mr-20'>
          <img src={c10} alt="" className='block h-10' />
        </div>

      </Marquee>
    </div>
  )
}

export default CompaniesCoro