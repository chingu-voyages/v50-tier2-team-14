import React, { useState } from 'react'

const MenuItem = ({ item }) => {
    const [amount, setAmount] = useState(1);


    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleAddToCart = (item, amount) => {

        console.log('adding to cart', amount, item)
    };
    
  return (
    <div className='card w-96  shadow-xl'>
      <figure>
        <img
          src={item.img}
          alt={item.dsc}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{item.dsc}</h2>
        <p className='text-xl'>${item.price}</p>
        <div className='flex items-center space-x-4'>
          <input
            type='number'
            min='1'
            value={amount}
            onChange={handleAmountChange}
            className='input input-bordered bg-neutral w-20'
          />
          <button
            className='btn btn-primary text-white'
            onClick={() => handleAddToCart(item, amount)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem