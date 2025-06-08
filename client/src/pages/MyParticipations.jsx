import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { HashLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function MyParticipations() {
  const { user, email } = useContext(UserContext);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const port = import.meta.env.VITE_PORT;

  useEffect(() => {
    const fetchUserRegistrations = async () => {
      try {
        const res = await axios.post(`${baseURL}:${port}/eventt/geteventsfromemail`, { email });
        setRegistrations(res.data);
      } catch (err) {
        console.error('Error fetching user registrations:', err);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchUserRegistrations();
    }
  }, [user]);

  const handleDelete = async (eventId) => {
    if (confirm("Are u sure, want to cancel registrations ?")) {
      try {
        const res = await axios.post(`${baseURL}:${port}/eventt/deleteRegistration`, {
          eventId,
          email
        });

        if (res)
          toast.success("Registration cancelled successfully")

        // Remove the deleted event from state
        setRegistrations(prev => prev.filter(reg => reg.eventId !== eventId));
      } catch (err) {
        console.error('Error deleting registration:', err);
        alert('Failed to delete registration. Please try again.');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-10">
        <HashLoader />
      </div>
    );
  }

  if (registrations.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        You haven’t registered for any events yet.
      </div>
    );
  }

  return (
    <div className='px-[200px]'>
      <h2 className="text-2xl font-semibold mb-6">My Registered Events</h2>
      <div className='grid grid-cols-2 gap-6'>
        {registrations.map((reg, index) => (
          <div key={index} className='border p-4 rounded shadow bg-white'>
            <div className='mb-2 font-bold'>
              <p>Event: {reg.eventName}</p>
              <p>Event College: {reg.eventCollegeName}</p>
            </div>
            <p><span className='font-medium'>Your College:</span> {reg.studentCollegeName}</p>
            <p><span className='font-medium'>Your branch:</span> {reg.branch}</p>
            <p><span className='font-medium'>Your course:</span> {reg.course}</p>
            <p><span className='font-medium'>Your year:</span> {reg.year}</p>
            <p><span className='font-medium'>Your mobile:</span> {reg.mobno}</p>

            <div className='flex justify-start gap-3 items-center mt-3'>
              <Link
                className='px-5 py-1 rounded-md border border-green-500 bg-green-500 text-white hover:bg-green-400'
                to={`/eventdetail/${reg.eventId}`}  
              >
                Get Detail
              </Link>
              <button
                onClick={() => handleDelete(reg.eventId)}
                className='px-5 py-1 rounded-md border border-red-600 text-red-700 hover:bg-red-500 hover:text-white'
              >
                Cancel Registration
              </button>
            </div>

            <p className='text-sm text-gray-500 mt-2'>Registered on: {new Date(reg.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyParticipations;
