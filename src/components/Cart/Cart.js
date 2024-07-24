import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { TfiFaceSad } from 'react-icons/tfi';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const cartItems = cart.itemsList.map((item) => (
    <CartItem
      item={item}
      key={item.id}
    />
  ));

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
    </div>
  );
};

export default Cart;
