// Code to display the Home page after successful login 
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any user data from localStorage or state
    localStorage.removeItem('authToken');

    // Redirect to the login page
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Home Page</h1>
      <p>You are successfully logged in!</p>
      <button 
        onClick={handleLogout} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#ff4d4d',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
