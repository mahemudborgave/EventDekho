import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import Eventt from './Eventt';

function MainSearch() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const port = import.meta.env.VITE_PORT;
  const [events, setEvents] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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

  const handleChange = (e) => {
    const value = e.target.value;  

    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }

    const result = events.filter(event => 
      event.eventName.toLowerCase().includes(value.toLowerCase()) ||
      event.collegeName.toLowerCase().includes(value.toLowerCase()) ||
      event.collegeCode.toLowerCase().includes(value.toLowerCase())
    )     
    setSearchResults(result);
  }

  return (
    <div className='text-center py-10'>
      <p className='text-7xl px-[200px] font-medium' style={{ fontFamily: "'Source Serif 4', sans-serif" }}>Discover the india's <br/>top <span className='text-amber-400'> college & technical </span>events</p>
      <p className='py-10'>Explore events from the most vibrant and creative colleges
      <br/>ready to inspire and engage your next experience</p>

      <div className='py-2 px-4 bg-[#e7e7e7ad] w-[750px] m-auto rounded-full flex'>
        <input type="text" placeholder="Search for event, college, etc" className='focus:outline-none outline-0 flex-grow ml-2 text-md' onChange={handleChange}/>
        <i className="fa-solid fa-magnifying-glass p-4 bg-amber-300 rounded-full"></i>
      </div>

      <div className='flex justify-center gap-2 py-6 text-sm text-[#535353]'>
        <p className='py-1 px-6 bg-[#e7e7e7ad] rounded-full border'>Technical</p>
        <p className='py-1 px-6 bg-[#e7e7e7ad] rounded-full'>Nontechnical</p>
        <p className='py-1 px-6 bg-[#e7e7e7ad] rounded-full'>social</p>
      </div>

      {loading && (
        <div className="flex justify-center items-center">
        <HashLoader />
      </div>
      )}

      <div className='px-[200px] text-left'>
        <Eventt events={searchResults}/>            
      </div>
    </div>
  )
}

export default MainSearch