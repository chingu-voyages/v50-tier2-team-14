import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';

import { TfiFaceSad } from 'react-icons/tfi';
import Checkout from '../Checkout/Checkout';
import OrderSummary from './OrderSummary';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
 
  const cartItems = cart.itemsList.map((item) => (
    <CartItem
      item={item}
      key={item.id}
    />
  ));

  const CartTable = () => {
    return (
      <div className='overflow-x-auto lg:w-3/4 w-full'>
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
          {/* end of head */}
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
        <div className='lg:w-3/4 w-full bg-white p-4 shadow rounded text-center flex flex-col items-center'>
          <p className='my-10'>
            <TfiFaceSad />
          </p>
          <p className='my-10'>Your cart is empty</p>
        </div>
      );
    }
  };

  return (
    <>
      {!cart.showCheckout ? (
        <div className='container mx-auto my-10 px-4 card shadow-xl'>
          <h2 className='card-title justify-center pt-10'>Meals in my cart</h2>
          <div className='card-body flex flex-col lg:flex-row gap-4'>
            <CartContent />
            <OrderSummary />
          </div>
        </div>
      ) : (
        <Checkout />
      )}
    </>
  );
};

export default Cart;
