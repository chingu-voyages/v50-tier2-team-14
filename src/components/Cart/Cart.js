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
    return <p>Proceed to checkout</p>;
  };

  // TO DO:
  const OrderSummary = () => {
    return <p>Order summary will be displayed here</p>;
  };

  return (
    <div className='container mx-auto px-4 card lg:card-side bg-neutral shadow-xl'>
      <div className='card-body grid md:grid-cols-2 sm:grid-cols-1 gap-2'>
        <div>
          <h2 className='card-title'>Your cart</h2>
          <CartContent />
        </div>
        <div className='bg-secondary'>
          <div className='card-actions justify-end'>
            <button
              className='btn btn-square btn-sm text-white'
              onClick={closeCart}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <h2 className='card-title'>Order summary</h2>
          <OrderSummary />
          <button className='btn text-white'>
            <ButtonText />
          </button>
        </div>

        {/* <h2 className='card-title'>New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Listen</button>
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
