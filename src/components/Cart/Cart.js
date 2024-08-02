import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

import { TfiFaceSad } from 'react-icons/tfi';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
 
  const cartTotalPrice = cart.itemsList.reduce((accumulator, item) => {
    return accumulator + item.totalPrice;
  }, 0);

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

  const OrderSummary = () => {
    return (
      <div className='lg:w-1/4 w-full bg-gray-100 p-6 rounded-lg shadow'>
        <h3 className='font-bold mt-3 mb-5 text-lg'>Summary</h3>
        <div className='mb-4'>
          Subtotal <span className='ml-10'>{cartTotalPrice} $</span>
        </div>
        <div className='mb-4'>
          Shipping <span className='font-bold ml-10'> FREE</span>
        </div>
        <hr className='my-4 border-t-2 border-gray-300' />
        <div className='py-2 text-lg font-semibold mb-4'>
          Total price: {cartTotalPrice} $
        </div>
        <button className='btn hover:bg-accent-800 text-white rounded-full w-full py-3'>
          Proceed to checkout
        </button>
      </div>
    );
  };

  return (
    <div className='container mx-auto my-10 px-4 card shadow-xl'>
      <h2 className='card-title justify-center pt-10'>Meals in my cart</h2>
      <div className='card-body flex flex-col lg:flex-row gap-4'>
        <CartContent />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
