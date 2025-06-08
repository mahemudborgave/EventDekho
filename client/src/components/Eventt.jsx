import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import collegeLogo from '../assets/images/college-high-school-svgrepo-com.svg';

function Eventt({events}) {  
  const location = useLocation();

  return (
    <div className='grid [grid-template-columns:repeat(auto-fit,minmax(700px,1fr))] gap-7'>
    {
      events.map((eventt, idx) => (
        <div className=' flex p-6 border border-gray-300 hover:outline-2 outline-amber-300 hover:border-none gap-4 rounded-xl' key={idx}>
          <div className='w-20 h-20 rounded-3xl p-2'>
            <img src={collegeLogo} alt="college logo" className='h-full w-full overflow-hidden object-contain'/>
          </div>
          <div className='flex-grow'>
              <p className='text-xl mb-1 text-[#0d0c22]'>{eventt.eventName}</p>
              <p className='mb-1 text-gray-500'>{eventt.collegeCode} - {eventt.collegeName}</p>
              <div className='flex gap-3 items-center text-gray-500'>
                <i className="fa-duotone fa-solid fa-calendar-days"></i>
                <span>{new Date(eventt.eventDate).toLocaleDateString('en-CA')}</span>
                <i className="fa-solid fa-location-dot"></i>
                <span>{eventt.eventLocation}</span>
              </div>
          </div>
          <div className='flex flex-col items-end text-sm'>
            {!location.pathname.startsWith('/eventdetail') && 
              (<Link 
            className='inline-block mb-2 px-7 py-2 bg-[#0d0c22] rounded-full text-white hover:bg-[#0d0c22d2]'
            to={`/eventdetail/${eventt._id}`}
            >Get Detail
            </Link> )}
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