import React from 'react'
import logo from '../utils/assests/logo.png'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const user=useSelector((store)=> store.user);
  const navigate=useNavigate();
  const handleSignOut = () => {
          
      signOut(auth).then(() => {
        navigate("/");
        
      }).catch((error) => {
        console.log(error);
      });

  }
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' src={logo} alt='logo'/>
        {user &&  <div className='flex p-4'>
          <img  className='w-12 h-12' src={user.photoURL} alt='usericon'></img>
          <button onClick={handleSignOut} className='font-bold text-white'>SignOut</button>
        </div>}
        
      
    </div>
  );
}; 

export default Header
