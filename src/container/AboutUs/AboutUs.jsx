import React from 'react';

import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter"></img>

    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <hi className='headtext_cormorant'>About Us</hi>
        <img src={images.spoon} alt='about-spoon' className='spoon__img'></img>
        <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium porro, saepe libero odit officia sit excepturi ratione tenetur reiciendis at, fugit magnam molestiae facere nul</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife' />

      </div>

      <div className='app__aboutus-content_history'>
        <hi className='headtext_cormorant'>Our History</hi>
        <img src={images.spoon} alt='about-spoon' className='spoon__img'></img>
        <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium porro, saepe libero odit officia sit excepturi ratione tenetur reiciendis at, fugit magnam molestiae facere nul</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
