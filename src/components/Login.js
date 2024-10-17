import React, { useState } from 'react'
import Header from './Header'
import bg from '../utils/assests/bg-image.jpg';
const Login = () => {

    const [isSignIn,setIsSignIn]=useState(true);

    const signInHandler = () => {
      setIsSignIn(!isSignIn);
    }

  return (
    <div >
      <Header/>
      <div className='absolute'>
        <img src={bg} alt='background-image'/>

      </div>
      <form className='absolute w-3/12  p-12 my-36   mx-auto left-0 right-0  bg-black bg-opacity-85 text-white rounded-lg'>
          <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          { !isSignIn && (<input className='p-4  my-4 w-full outline-none   bg-slate-800 bg-opacity-95'  placeholder='Full Name' type='text'></input>)}
          <br></br>
          <input className='p-4  my-4 w-full outline-none   bg-slate-800 bg-opacity-95'  placeholder='Email address' type='text'></input>
          <br></br>
          <input className='p-4 my-4 w-full outline-none  bg-slate-800 bg-opacity-95'   placeholder='Password' type='password'></input>
          <br></br>
          <button className='p-4 my-6 w-full bg-red-800 rounded-md font-bold'>{isSignIn ? "Sign In" : "Sign Up"}</button>
          <p className='text-sm font-medium p-2 cursor-pointer' onClick={signInHandler}>{isSignIn ? "New to Netflix? Sign Up Now" :"Already Registered? Sign In Now."} </p>
        
      </form>


    </div>
  )
}

export default Login
