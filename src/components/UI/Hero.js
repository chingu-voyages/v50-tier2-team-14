import React from 'react'

const Hero = ({ handleHeroButtonClick }) => {
  return (
    <div className='hero  min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <img
            src='images/logo/hungry_image.png'
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
