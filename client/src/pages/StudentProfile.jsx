import React, {useContext, useState, useEffect} from 'react'
import { University, Mail } from 'lucide-react';
import LogoutIcon from '@mui/icons-material/Logout';
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext';
import { Link, useParams } from 'react-router-dom'
import userprofile from '../assets/images/userprofile.jpg'

function StudentProfile() {
    const [token, setToken] = useState(null)
    const {user, setUser} = useContext(UserContext);
    const {email, setEmail} = useContext(UserContext);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        // const storedUser = localStorage.getItem('username');
        setToken(storedToken); 
        // setUser(storedUser);   
    }, [token, user])

    const handleLogout = () => {
        if(confirm("Are u sure, want to logout ?")) {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            // setToken(null) 
            setUser(null) 
            setEmail(null) 
            console.log(user);
                   
            setTimeout(() => {
                toast.success("Logged Out!", { autoClose: 2000 });
            }, 0);
    } 
  }

  return (
    <div className='px-[200px] flex flex-col'>
        {
            token && (
                <span 
                    onClick={handleLogout} 
                    className='flex items-center mb-5 bg-red-600 text-white py-2 px-4 rounded-md  cursor-pointer  hover:outline-5 hover:outline-red-100 hover:outline-offset-2 self-end'>
                        <LogoutIcon 
                            sx={{ fontSize: 20, borderRadius: 2, transition: 'background-color 0.2s ease-in-out' }} 
                            className='mr-2  text-amber-50 '/>
                        Log out
                </span>
            )
        }
        <div className='flex gap-4'>
            <div>
                <div className='bg-gray-300 w-50 h-50'><img src={userprofile} alt="" /></div>
            </div>
            <div className='bg-gray-100 grow p-8 text-sm'>
                <p className='text-gray-900 text-3xl font-bold mb-2'>{user}</p>
                <p className='text-gray-700 mb-1'><University className='inline-block mr-2' size={18} />Walchand College of Engineering, Sangli</p>
                <p className='text-gray-700'><Mail className='inline-block mr-2' size={18} />{email}</p>
            </div>
        </div>
        
        <Link to='/myparticipations' className='text-green-500 underline mt-10'>view your registrations</Link>
        <div className='h-50'></div>
    </div>
  )
}

export default StudentProfile