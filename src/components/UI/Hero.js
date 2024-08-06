import React from 'react'
import logo from '../../images/logo/hungry_image.png'

const Hero = ({ handleHeroButtonClick }) => {
  return (
    <div className='hero  min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <img
            src={logo}
            alt='hungry rabbit asking if you are hungry'
          />
          <button
            className='btn btn-primary text-white'
            onClick={handleHeroButtonClick}>
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero
