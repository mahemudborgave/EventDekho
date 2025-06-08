import React, { useEffect, useState, useContext } from 'react'
import {NavLink, Link} from 'react-router-dom';
import { User } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import eventdekhoLogo from '../assets/images/eventdekho-logo.png';
import UserContext from '../context/UserContext';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [token, setToken] = useState(null)
    const {user, setUser} = useContext(UserContext);
    // console.log(user);
    
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('username');
        setToken(storedToken);   
        setUser(storedUser);   
    }, [token, user])

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
        }

        window.addEventListener("scroll", onScroll);
        return () => {window.removeEventListener("scroll", onScroll);}
    },[]);

  return (
    <>
    <div className={`z-99 flex justify-between px-[200px] py-6 text-md items-center fixed top-0 left-0 w-screen h-25 ${scrolled ? "bg-white  border-gray-400 shadow-md" : "bg-transparent"}`}>
        <Link to='/' className='font-bold text-xl'><img src={eventdekhoLogo} alt="logo" className='h-20'/></Link>
        <ul className='flex'>
            <li>
                <NavLink
                to="/"
                className={({ isActive }) => 
                    isActive ? 'text-amber-500 px-5 py-1 border-b' : 'black px-5 py-2'
                }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/events"
                className={({ isActive }) => 
                    isActive ? 'text-amber-500 px-5 py-1 border-b' : 'black px-5 py-2'
                }
                >
                    Events
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/colleges"
                className={({ isActive }) => 
                    isActive ? 'text-amber-500 px-5 py-1 border-b' : 'black px-5 py-2'
                }
                >
                    Colleges
                </NavLink>
            </li>
            {/* <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => 
                        isActive ? 'text-amber-500 px-5 py-1 border-b' : 'black px-5 py-2'
                    }
                    >
                        Contact
                </NavLink>
            </li> */}
            <li>
                <NavLink
                    to="/myParticipations"
                    className={({ isActive }) => 
                        isActive ? 'text-amber-500 px-5 py-1 border-b' : 'black px-5 py-2'
                    }
                    >
                        My Participations
                </NavLink>
            </li>
        </ul>
        <ul >
            { !token ? (
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
                <span className='font-medium text-md'>
                    Welcome, 
                    <span className='text-amber-400'> {user}</span>
                    <Link
                    to='/studentprofile'
                    >
                        <User 
                            data-tooltip-id="user-tooltip"
                            data-tooltip-content="View Profile"
                            className='inline-block bg-amber-300 p-2 rounded-full ml-2 cursor-pointer hover:bg-amber-300 hover:outline-5 hover:outline-amber-100 hover:outline-offset-2' 
                            size={35}
                        />
                    </Link>
                </span>
            )
            }
        </ul>
    </div>
    <Tooltip id="user-tooltip" />
    </>
  )
}

export default Navbar