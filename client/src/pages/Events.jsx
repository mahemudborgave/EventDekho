import React from 'react';
import { Link } from 'react-router-dom';


function Events() {
  return (
    <div className='px-[200px]'>
      <div className=' flex p-5 bg-gray-200 gap-4'>
        <div className='bg-gray-600 w-25 h-25 rounded-3xl'></div>
        <div className='flex-grow'>
            <p className='text-2xl mb-1'>Treasure hunt</p>
            <p className='mb-3'>Indian Institute of Technologyy, Vishrambaug</p>
            <div className='flex gap-3 items-center text-gray-500'>
              <i class="fa-duotone fa-solid fa-calendar-days"></i>
              <span>7 July 2025</span>
              <i class="fa-solid fa-location-dot"></i>
              <span>Vishrambaug</span>
            </div>
        </div>
        <div>
          <Link className='inline-block mr-3 px-7 py-2 bg-[#0d0c22] rounded-full text-white '>Get Detail</Link>
        </div>
      </div>
    </div>
  )
}

export default Events