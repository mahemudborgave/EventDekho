import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dotenv from "dotenv";
import { HashLoader } from 'react-spinners';
import Eventt from '../components/Eventt';


function Events() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const port = import.meta.env.VITE_PORT;
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async() => {
      try {
        const res = await axios.get(`${baseURL}:${port}/eventt/getevents`)
        setEvents(res.data);
      }catch (err) {
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [])

  if(loading) {
    return (
      <div className="flex justify-center items-center p-10">
        <HashLoader />
      </div>
    )
  }
  
  return (
    <>
    <div className='px-[200px]'>
      <p className='mt-7'>Showing all events </p>
      <hr className='w-full mb-7'/>
    </div>
    <Eventt events={events}/>
    </>
    // <div className='px-[200px]'>
    // {
    //   events.map((eventt, idx) => (
    //     <div className=' flex p-5 bg-gray-200 hover:outline outline-gray-400 gap-4 mb-4' key={idx}>
    //       <div className='bg-gray-600 w-20 h-20 rounded-3xl'>
    //         {/* <img src="college-logo.png" alt="college logo" className='h-full w-full overflow-hidden object-contain'/> */}
    //       </div>
    //       <div className='flex-grow'>
    //           <p className='text-xl mb-1'>{eventt.eventName}</p>
    //           <p className='mb-1'>{eventt.collegeCode} - {eventt.collegeName}</p>
    //           <div className='flex gap-3 items-center text-gray-500'>
    //             <i class="fa-duotone fa-solid fa-calendar-days"></i>
    //             <span>{new Date(eventt.eventDate).toLocaleDateString('en-CA')}</span>
    //             <i class="fa-solid fa-location-dot"></i>
    //             <span>{eventt.eventLocation}</span>
    //           </div>
    //       </div>
    //       <div className='flex flex-col items-end text-sm'>
    //         <Link className='inline-block mb-2 px-7 py-2 bg-[#0d0c22] rounded-full text-white hover:bg-[#0d0c22d2]'>Get Detail</Link>
    //         <p className='italic text-gray-400'>posted on : {new Date(eventt.postedOn).toLocaleDateString('en-CA')}</p>
    //         <p className='italic text-red-500'>closing on : {new Date(eventt.closeOn).toLocaleDateString('en-CA')}</p>
    //       </div>
    //   </div>
    //   ))
    // }
      
    // </div>
  )
}

export default Events