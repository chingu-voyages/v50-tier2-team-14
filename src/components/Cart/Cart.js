import React from 'react'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const Cart = () => {
  const cart = useSelector(state => state.cart)

  console.log('cartItems', cart)
  const cartItems = cart.itemsList.map((item) => (
    <CartItem
      item={item}
      key={item.id}
    />
  ));
  
  return (
    <div>
      <h1>Your Cart has {cart.totalQuantity} items</h1>
      <ul>
        {cartItems}
      </ul>
    </div>
  );
}

export default Cart