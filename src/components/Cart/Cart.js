import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';

import { TfiFaceSad } from 'react-icons/tfi';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const cartItems = cart.itemsList.map((item) => (
    <CartItem
      item={item}
      key={item.id}
    />
  ));

  // const closeCart = () => {
  //   dispatch(cartActions.setShowCart());
  // };

  const CartTable = () => {
    return (
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Meals</th>
              <th>Quantity</th>
              <th>Final Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </table>
      </div>
    );
  };

  const CartContent = () => {
    if (cart.totalQuantity > 0) {
      return <CartTable />;
    } else {
      return (
        <div className='text-center'>
          <TfiFaceSad />
          <p>Your cart is empty</p>
        </div>
      );
    }
  };

  // const ButtonText = () => {
  //   return <p>Proceed to checkout</p>;
  // };

  // // TO DO:
  // const OrderSummary = () => {
  //   return <p>Order summary will be displayed here</p>;
  // };

  return (
    <div className='container mx-auto px-4 card lg:card-side bg-neutral shadow-xl'>
      <h2 className='card-title justify-center'>Meals in my cart</h2>
      <div className='card-body'>
        <CartContent />
      </div>
    </div>
  );
};

export default Cart;
