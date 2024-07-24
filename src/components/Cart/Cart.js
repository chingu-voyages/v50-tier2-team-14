import React from 'react'
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  
  const cartItems = cart.itemsList.map((item) => (
    <CartItem
      item={item}
      key={item.id}
    />
  ));
  

  const showCart = () => {
    dispatch(cartActions.setShowCart())
  }

  const CartText = () => {
    if (cart.totalQuantity === 1) {
      return <h1 onClick={showCart}>Your Cart has 1 item</h1>;
    } 
    if (cart.totalQuantity === 0) {
      return <h1>Your Cart is empty</h1>;
    } 
    return (
      <h1 onClick={showCart}>{`Your Cart has ${cart.totalQuantity} items`}</h1>
    );
  }
  
  return (
    <div>
      <CartText />
      <ul>{cartItems}</ul>
    </div>
  );
}

export default Cart