import React from 'react'
import { useSelector } from 'react-redux'
import OrderSummary from '../Cart/OrderSummary'



const Checkout = () => {
    const cart = useSelector(state => state.cart)
    console.log(cart)
  return (
    <div className='container mx-auto my-10 px-4 card shadow-xl'>
          <OrderSummary />
          
    </div>
  );
}

export default Checkout