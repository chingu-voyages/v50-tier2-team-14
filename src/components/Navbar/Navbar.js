import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar bg-neutral relative'>
      <div className='flex-1'>
        <img
          src='images/logo/rabbit_logo_1.png'
          alt='Logo'
          width='120px'
        />
      </div>
      <div className='flex-none absolute right-10'>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn bg-secondary btn-ghost btn-circle'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='white'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              {/* TO DO: this badge must appear only when items are in the cart */}
              <span className='badge badge-sm indicator-item bg-base-100 text-dark border-none'>
                8
              </span>
              {/* end of badge */}
            </div>
          </div>

          {/* TO DO: get data from redux store and display in this dropdown modal */}
          <div
            tabIndex={0}
            className='card card-compact dropdown-content bg-accent  text-white z-[1] mt-3 w-52 shadow'>
            <div className='card-body'>
              <span className='font-bold'>8 Items</span>
              <span className='text-success font-bold'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn btn-neutral btn-block'>View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
