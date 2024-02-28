import React from 'react';
import './aboutPage.css';
import {Footer, Navbar} from '../../components';

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <div className='aboutPage-top'><Navbar /></div>
      <div className='aboutPage-middle'></div>
      <div className='aboutPage-bottom'><Footer /></div>
    </div>
  )
}

export default AboutPage