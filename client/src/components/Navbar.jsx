import React, { useEffect, useState } from 'react'
import {NavLink, Link} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { toast, ToastContainer } from 'react-toastify';

function Navbar() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("username");
        if(storedUser) {
            setUser(storedUser);
        }
    },[]);

    const handleLogout = () => {
        if(confirm("Are u sure, want to logout ?")) {
            localStorage.removeItem("username");
            setUser(null);  
            setTimeout(() => {
                toast.success("Logged Out!", { autoClose: 2000 });
            }, 0);
        } 
    }

  return (
    <>
    <div className='flex justify-between px-[200px] py-6 text-md items-center'>
        <Link to='/' className='font-bold text-xl'><img src="./eventdekho-logo.png" alt="logo" className='h-20'/></Link>
        <ul className='flex'>
            <li>
                <NavLink
                to="/"
                className={({ isActive }) => 
                    isActive ? 'text-amber-500 px-5 py-2 rounded-xl bg-[#f8c92d3a]' : 'black px-5 py-2'
                }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/events"
                className={({ isActive }) => 
                    isActive ? 'text-amber-500 px-5 py-2 rounded-xl bg-[#f8c92d3a]' : 'black px-5 py-2'
                }
                >
                    Events
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/colleges"
                className={({ isActive }) => 
                    isActive ? 'text-amber-500 px-5 py-2 rounded-xl bg-[#f8c92d3a]' : 'black px-5 py-2'
                }
                >
                    Colleges
                </NavLink>
            </li>
            <li>
            <NavLink
                to="/contact"
                className={({ isActive }) => 
                    isActive ? 'text-amber-500 px-5 py-2 rounded-xl bg-[#f8c92d3a]' : 'black px-5 py-2'
                }
                >
                    Contact
                </NavLink>
            </li>
        </ul>
        <ul >
            { !user ? (
                <>
                <Link
                to="/login"
                className='inline-block mr-3 px-5 py-2 bg-[#0d0c22] rounded-full text-white' 
                >Log in
                </Link>
                <Link
                to="/register"
                >Sign up
                </Link>
                </>
            ) : (
                <span className='font-medium text-md'>Welcome, <span className='text-amber-400'>{user}</span><span onClick={handleLogout}><LogoutIcon sx={{ fontSize: 35, borderRadius: 2, transition: 'background-color 0.2s ease-in-out' }} className='bg-amber-400 text-amber-50 p-2 ml-3 cursor-pointer hover:bg-amber-300 hover:outline-5 hover:outline-amber-100 hover:outline-offset-2'/></span></span>
            )
            }
        </ul>
    </div>
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default Navbar