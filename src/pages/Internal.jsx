// InternalPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const InternalPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the login flag from local storage
    localStorage.removeItem('isLoggedIn');
    // Redirect to the login page upon logout
    navigate('/');
  };

  return (
    <div className='h-[100vh] w-[100vh] flex items-center justify-center md:text-5xl text-2xl text-cyan bg-black-lite text-white'>
      <h2>Internal Page</h2>
      <p>Welcome to the internal page!</p>
    </div>
  );
};

export default InternalPage;
