import React from 'react'

function Register() {
    return (
        <div className='flex w-[900px] border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='w-[50%] flex justify-center items-center'>
                <p className='text-3xl'>Welcome !</p>
            </div>
            <div className='p-10'>
                <p>Sign Up</p>
                <p>Welcome ! Please create your account</p>
                <form action="">
                    <input type="text" placeholder='Enter userid' className='block'/>
                    <input type="email" name="" id="" placeholder='Enter your email' className='block'/>
                    <input type="password" placeholder='Enter password' className='block'/>
                    <input type="password" placeholder='Reenter password' className='block'/>
                    <input type="submit" value="Create Account" />
                </form>
                
            </div>
        </div>
    )
}

export default Register