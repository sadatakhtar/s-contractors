import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleAbout = () => {
        navigate('/about');
    }
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleAbout}>About</button>
    </>

  )
};

export default Home;
