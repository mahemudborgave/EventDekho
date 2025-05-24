import React from 'react'
import { Link } from 'react-router-dom';

function Eventt({events}) {
  console.log(events);
  
  return (
    <div className='px-[200px]'>
    {
      events.map((eventt, idx) => (
        <div className=' flex p-5 bg-gray-200 hover:outline outline-gray-400 gap-4 mb-4' key={idx}>
          <div className='bg-gray-600 w-20 h-20 rounded-3xl'>
            {/* <img src="college-logo.png" alt="college logo" className='h-full w-full overflow-hidden object-contain'/> */}
          </div>
          <div className='flex-grow'>
              <p className='text-xl mb-1'>{eventt.eventName}</p>
              <p className='mb-1 text-gray-500'>{eventt.collegeCode} - {eventt.collegeName}</p>
              <div className='flex gap-3 items-center text-gray-500'>
                <i className="fa-duotone fa-solid fa-calendar-days"></i>
                <span>{new Date(eventt.eventDate).toLocaleDateString('en-CA')}</span>
                <i className="fa-solid fa-location-dot"></i>
                <span>{eventt.eventLocation}</span>
              </div>
          </div>
          <div className='flex flex-col items-end text-sm'>
            <Link className='inline-block mb-2 px-7 py-2 bg-[#0d0c22] rounded-full text-white hover:bg-[#0d0c22d2]'>Get Detail</Link>
            <p className='italic text-gray-400'>posted on : {new Date(eventt.postedOn).toLocaleDateString('en-CA')}</p>
            <p className='italic text-red-500'>closing on : {new Date(eventt.closeOn).toLocaleDateString('en-CA')}</p>
          </div>
      </div>
      ))
    }
      
    </div>
  )
}

export default Eventt