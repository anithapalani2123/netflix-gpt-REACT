import React, { useEffect } from 'react'
import logo from '../utils/assests/logo.png'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const user=useSelector((store)=> store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSignOut = () => {
          
      signOut(auth).then(() => {
        
        
      }).catch((error) => {
        console.log(error);
      });

  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid , email:email , displayName: displayName,photoURL:photoURL}));
          navigate("/browse")
          
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });

      return ()=>unsubscribe();

},[]);
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' src={logo} alt='logo'/>
        {user &&  <div className='flex p-4'>
          <img  className='w-12 h-12' src={LOGO} alt='usericon'></img>
          <button onClick={handleSignOut} className='font-bold text-white'>SignOut</button>
        </div>}
        
      
    </div>
  );
}; 

export default Header
