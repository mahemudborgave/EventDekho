import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Eventt from '../components/Eventt';
import EventRegistration from '../components/EventRegistration';
import { ToastContainer, toast } from 'react-toastify';

function EventDetail() {
  const { eventId } = useParams();
  const [event, setEvent] = useState('');
  const [isShow, setIsShow] = useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const port = import.meta.env.VITE_PORT;

  const handleClick = async () => {
    const StoredToken = localStorage.getItem("token");
    // console.log(StoredToken);
    let response;
    
    if(StoredToken) {
      try {
        response = await axios.post(`${baseURL}:${port}/userauth/verifytoken`, 
          {},
          {
            headers : {
                Authorization: `Bearer ${StoredToken}`
            }
          })
      }
      catch(e) {
        console.log("Error ", e)
      }
    }

    // console.log(StoredToken);

    if(StoredToken && response) {
      isShow ? setIsShow(false) : setIsShow(true);
    }
    else {
        toast.warn("Please Log in to continue ..")
    }

    // console.log(StoredToken);
  }

  useEffect(() => {
    const getEventDetails = async () => {
      try {
        const res = await axios.get(`${baseURL}:${port}/eventt/getevent/${eventId}`)
        // console.log(res.data)
        setEvent(res.data)
      }
      catch (err) {
        console.error('Error fetching event:', err);
      }
    };
    getEventDetails()
  }, [])

  return (
    <div className='mx-[200px]'>
      <Eventt events={[event]} />
      <div className=' p-10 pb-20 bg-green-200 my-8 rounded-xl'>
        <p className='text-xl text-green-700 mb-5'>Details -   </p>
        <p className='mb-10'>{event.eventDescription}</p>
        <Link
          className='bg-green-700 text-white py-2 px-5 rounded-md inline-block hover:outline-5 hover:outline-green-300 hover:outline-offset-0'
          to=''
          onClick={handleClick}
        >
          {isShow ? 'Close' : 'Participate'}
        </Link>
        {isShow && <EventRegistration eventId={eventId} eventName={event.eventName} collegeName={event.collegeName}/>}

      </div>
    </div>
  )
}

export default EventDetail