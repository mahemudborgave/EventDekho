import React from 'react'
import {NavLink, Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between px-[200px] py-6 text-md items-center'>
        <Link to='/' className='font-bold text-xl'><img src="eventdekho-logo.png" alt="logo" className='h-20'/></Link>
        <ul className='flex'>
            <li>
                <NavLink
                to="/"
                className={({ isActive }) => 
                    isActive ? 'text-amber-300 px-5 py-2 rounded-xl bg-[#f8c92d2f]' : 'black px-5 py-2'
                }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/events"
                className={({ isActive }) => 
                    isActive ? 'text-amber-300 px-5 py-2 rounded-xl bg-[#f8c92d2f]' : 'black px-5 py-2'
                }
                >
                    Events
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/colleges"
                className={({ isActive }) => 
                    isActive ? 'text-amber-300 px-5 py-2 rounded-xl bg-[#f8c92d2f]' : 'black px-5 py-2'
                }
                >
                    Colleges
                </NavLink>
            </li>
            <li>
            <NavLink
                to="/contact"
                className={({ isActive }) => 
                    isActive ? 'text-amber-300 px-5 py-2 rounded-xl bg-[#f8c92d2f]' : 'black px-5 py-2'
                }
                >
                    Contact
                </NavLink>
            </li>
        </ul>
        <ul >
            <Link
            to=""
            className='inline-block mr-3 px-5 py-2 bg-[#0d0c22] rounded-full text-white' 
            >Log in
            </Link>
            <Link
            >Sign up
            </Link>
        </ul>
    </div>
  )
}

export default Navbar