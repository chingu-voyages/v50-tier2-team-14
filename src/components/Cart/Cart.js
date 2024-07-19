import React from 'react'
import CartItem from './CartItem';

const dummyCartItems = [
  {
    id: 1,
    name: 'Burger',
    price: '12USD',
    count: 1,
  },
  {
    id: 2,
    name: 'Sandwich',
    price: '10USD',
    count: 1,
  },
  {
    id: 3,
    name: 'Soup',
    price: '8USD',
    count: 1,
  },
];

const Cart = () => {
    const cartItems = dummyCartItems.map((item) => 
        <CartItem item={item} />
    )
  return (
      <ul>
          {cartItems}
    </ul>
  )
}

export default Cart