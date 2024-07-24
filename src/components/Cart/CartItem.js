import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  console.log(cart);

  const removeFromCart = (id) => {
     dispatch(cartActions.removeFromCart(id));
  }
   
  
  return (
    <li>
      <span>{item.name}</span>
      <span> X {item.quantity}</span>{' '}
      <span>{item.totalPrice.toFixed(2)}USD</span>{' '}
      <button
        className='btn btn-primary btn-circle'
        onClick={() => removeFromCart(item.id)}>
        X
      </button>
    </li>
  );
}

export default CartItem