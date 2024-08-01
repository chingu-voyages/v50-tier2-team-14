import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const MenuItem = ({ item }) => {
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleAddToCart = (item, amount) => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        price: item.price,       
        quantity: parseInt(amount),
        name: item.dsc,
        img: item.img
      })
    );
  };

  //adds fallback image of a rabbut logo in case img is not dispalyed
  const handleImageError = (e) => {
    e.target.src = '/images/logo/rabbit_logo_1.png';
  };

  return (
    <div className='card w-96  shadow-xl'>
      <figure>
        <img
          src={item.img}
          onError={handleImageError}
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
};

export default MenuItem;

