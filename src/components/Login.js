import React, { useRef, useState } from 'react'
import Header from './Header'
import bg from '../utils/assests/bg-image.jpg';
import { checkSignInValidation,checkSignUpValidation } from '../utils/validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch();

    const [isSignIn,setIsSignIn]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);

    const signInHandler = () => {
      setIsSignIn(!isSignIn);
    }

    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);

    const handleSignIn = () =>{
      const message=checkSignInValidation(email.current.value,password.current.value);
      setErrorMessage(message);
      console.log(message);

      if(message) return;

      if(isSignIn)
      {
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage+errorCode);
        });
      }
    }

    const handleSignUp = () =>{
      const message=checkSignUpValidation(email.current.value,password.current.value,name.current.value);
      setErrorMessage(message);
      console.log(message);

      if(message) return;

      if(!isSignIn)
      {
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName:name.current.value, photoURL: "https://www.petsworld.in/blog/wp-content/uploads/2015/02/teddybear1.jpg"
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid , email:email , displayName: displayName,photoURL:photoURL}));
            navigate("/browse");
            
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage+errorCode);
          });
          console.log(user);
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage+errorCode);
        });
      }
    }
 
    


  return (
    <div >
      <Header/>
      <div className='absolute'>
        <img src={bg} alt='background-image'/>

      </div>
      <form onSubmit={(e)=>{e.preventDefault()}} className='absolute w-3/12  p-14 my-36   mx-auto left-0 right-0  bg-black bg-opacity-85 text-white rounded-lg'>
          <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>


          { !isSignIn && (<input ref={name} className='p-4  my-4 w-full outline-none   bg-slate-800 bg-opacity-95'  placeholder='Full Name' type='text'></input>)}

          <br></br>
          <input className='p-4  my-4 w-full outline-none   bg-slate-800 bg-opacity-95' ref={email} placeholder='Email address' type='text'></input>

          <br></br>
          <input ref={password} className='p-4 my-4 w-full outline-none  bg-slate-800 bg-opacity-95'   placeholder='Password' type='password'></input>

          <br></br>

          <p className='text-md font-bold p-2 text-red-600'>{errorMessage}</p>

          {isSignIn && (<button className='p-4 my-6 w-full bg-red-800 rounded-md font-bold' onClick={handleSignIn}> Sign In </button>)}

          {!isSignIn && (<button className='p-4 my-6 w-full bg-red-800 rounded-md font-bold' onClick={handleSignUp}> Sign Up </button>)}
          
          <p className='text-sm font-medium p-2 cursor-pointer' onClick={signInHandler}>{isSignIn ? "New to Netflix? Sign Up Now" :"Already Registered? Sign In Now."} </p>
        
      </form>


    </div>
  )
}

export default Login
