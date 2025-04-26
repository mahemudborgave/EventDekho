import React, { useState } from 'react'
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import dotenv from "dotenv";
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Login() {

    const baseURL = import.meta.env.VITE_BASE_URL;
    const port = import.meta.env.VITE_PORT;
    const navigate = useNavigate();

    // const [formData, setFormDatat] = useState( {
    //     name: '',
    //     email: '',
    //     password: ''
    // });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if(e.target.name == 'email') {
            setEmail(e.target.value);
        }
        else if(e.target.name == 'password') {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${baseURL}:${port}/login/login`, {email, password})
            // console.log(res);
            toast.success("Logged In");
            navigate('/');
            
        }
        catch(error) {
            if (error.response) {
                if (error.response.status === 400) {
                    toast.warn(error.response.data.message || "Invalid data");
                } else {
                    toast.error("Error while signing up");
                }
            } else {
                toast.error("Network or server error");
            }
        }
    }

    
    return (
        <>
        <div className='flex w-[900px] border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='w-[50%] flex justify-center items-center'>
                <p className='text-3xl'>Welcome back!</p>
            </div>
            <div className='p-10'>
                <p>Log In</p>
                <form onSubmit={handleSubmit}>                    
                    <input type="email" name="email" id="" placeholder='Enter your email' className='block' onChange={handleChange} required/>
                    <input type="password" name="password" placeholder='Enter password' className='block' onChange={handleChange} required/>
                    <input type="submit" value="Log In" />
                </form>
                <Link to='/register'>New User ? Register</Link>
                
            </div>
        </div>

        <ToastContainer />
        </>
        
    )
}

export default Login