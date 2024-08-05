import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const cart = useSelector(state => state.cart)
    console.log(cart)
  return (
    <div className='container mx-auto my-10 px-4 card shadow-xl'>
      <h2 className='card-title justify-center pt-10'>Check out</h2>
      <div className='card-body flex flex-col lg:flex-row gap-4'>
        
      </div>
    </div>
  );
}

export default Checkout