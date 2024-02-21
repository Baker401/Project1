import React from 'react';
import './homepage.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage-top'>
            <Navbar></Navbar>
        </div>
        <div className='homepage-middle'>
          <div className='homepage-middle-heading'>
            <h1>Welcome to our <span>Live</span> Tracking Website!</h1>
          </div>
          <div className='homepage-middle-decoration'></div>
          <div className='homepage-middle-data'>
            <p>Seamlessly Navigate Every Detail, Every Movement - Unleash the Power to Track,<br />
              Understand, and Stay Ahead. Your Data, Your World, Live at Your Fingertips.</p>
          </div>
        </div>
        <div className='homepage-bottom'>
          <Footer></Footer>
        </div>
    </div>
  )
}

export default Homepage