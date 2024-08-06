import React from 'react'

const SuccessAlert = () => {
  return (
    <div
      role='alert'
      className='alert alert-success mb-5 mt-8'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 shrink-0 stroke-current'
        fill='none'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      <span>Your order has been placed!</span>
    </div>
  );
}

export default SuccessAlert