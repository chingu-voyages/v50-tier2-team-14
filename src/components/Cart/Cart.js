import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { TfiFaceSad } from 'react-icons/tfi';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartItems = cart.itemsList.map((item) => (
    <CartItem
      item={item}
      key={item.id}
    />
  ));

  const closeCart = () => {
    dispatch(cartActions.setShowCart());
  };

  const CartContent = () => {
    if (cart.totalQuantity > 0) {
      return <ul>{cartItems}</ul>;
    } else {
      return <TfiFaceSad />;
    }
  };

  const ButtonText = () => {
    if (cart.totalQuantity > 0) {
      return <p>Proceed to checkout</p>;
    } else {
      return <p>There is nothing in your cart</p>;
    }
  };

  return (
    <div>
      <h1>Your cart</h1>
      <div>
        <CartContent />
      </div>
      <button className='btn text-white'>
        <ButtonText />
      </button>
      <button
        className='btn bg-secondary text-white'
        onClick={closeCart}>
        Close
      </button>
    </div>
  );
};

export default Cart;
