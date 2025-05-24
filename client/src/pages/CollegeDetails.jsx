import React, { useEffect, useState } from 'react'
import Events from './Events'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { HashLoader } from 'react-spinners';
import axios from 'axios';
import Eventt from '../components/Eventt';

function CollegeDetails() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [college, setCollege] = useState([]);
  const [collegeEvents, setCollegeEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const port = import.meta.env.VITE_PORT;

  console.log(code)

  useEffect(() => {

    const fetchCollege = async () => {
        try {
            const res = await axios.get(`${baseURL}:${port}/eventt/getcollege/${code}`);
            setCollege(res.data);
        }
        catch (err) {
          console.error('Error fetching college:', err);
          navigate('/colleges');
        }
    }

    fetchCollege();

    const fetchCollegeEvent = async () => {
        try {
            const res = await axios.get(`${baseURL}:${port}/eventt/getevents/${code}`);
            console.log(res.data)
            setCollegeEvents(res.data);
        }
        catch (err) {
          console.error('Error fetching college events:', err);
          navigate('/colleges');
        } finally {
          setLoading(false);
        }
    }

    fetchCollegeEvent();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-10">
        <HashLoader />
      </div>
    );
  }

//   const collegeEventss = [{
//     _id: "6812a7c87da683d37569929c",
//     collegeCode: "1001",
//     collegeName: "Walchand College of Engineering, Sangli",
//     eventName: "Tech Symposium 2025",
//     eventLocation: "Main Auditorium, Block A",
//     eventDate: "2025-05-15T00:00:00.000Z",
//     postedOn: "2025-04-30T00:00:00.000Z",
//     closeOn: "2025-05-10T00:00:00.000Z"
//   },
//   {
//     _id: "6812a7c87da683d37569929c",
//     collegeCode: "1001",
//     collegeName: "Walchand College of Engineering, Sangli",
//     eventName: "Tech Symposium 2025",
//     eventLocation: "Main Auditorium, Block A",
//     eventDate: "2025-05-15T00:00:00.000Z",
//     postedOn: "2025-04-30T00:00:00.000Z",
//     closeOn: "2025-05-10T00:00:00.000Z"
//   },
// ];


  if (!college) {
    return <div>College not found</div>;
  }

  return (
    <>
        <div className='mb-8 px-[200px] flex'>
            {/* <div className='bg-gray-600 w-20 h-20 rounded-3xl mr-3'><img src="" alt="" /></div> */}
            <div className='w-full'>
                <p className='text-amber-400 text-4xl mb-2'>{college.collegeName}</p>
                <span className='text-gray-500 border px-4 text-violet-500 mr-2'>Code - {college.collegeCode}</span>
                <span className='text-gray-500 border px-4 text-green-500'> Total events - {college.collegeEventCount}</span>
                <p className='mt-7'>Event list </p>
                <hr className='w-full'/>
            </div>  
        </div>
        <Eventt events={collegeEvents}/>
    </>
  )
}

export default CollegeDetails