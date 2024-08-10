import React from 'react'
import OrderSummary from '../Cart/OrderSummary'


const Checkout = () => {

  return (
    <div className='container mx-auto my-10 sm:ml-2 px-4 card w-96 shadow-xl'>
      <OrderSummary />
    </div>
  );
}

export default Checkout