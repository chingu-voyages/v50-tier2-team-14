import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const Navbar = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  console.log('Cart', cart);
  
  const cartNotEmpty = cart.totalQuantity > 0;
  const cartTotalPrice = cart.itemsList.reduce(
    (accumulator, item) => {
      return accumulator + item.totalPrice},
    0);
  
   const showCart = () => {
     dispatch(cartActions.setShowCart());
   };
  
  return (
    <div className='navbar bg-neutral relative'>
      <div className='flex-1'>
        <img
          src='images/logo/rabbit_logo_1.png'
          alt='Logo'
          width='120px'
        />
      </div>
      <div className='flex-none absolute right-10'>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn bg-secondary btn-ghost btn-circle'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='white'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              {/* badge appearing only when items have been added to cart */}
              {cartNotEmpty && (
                <span className='badge badge-sm indicator-item bg-base-100 text-dark border-none'>
                  {cart.totalQuantity}
                </span>
              )}

              {/* end of badge */}
            </div>
          </div>

          {/* dropdown modal */}
          <div
            tabIndex={0}
            className='card card-compact dropdown-content bg-accent  text-white z-[1] mt-3 w-52 shadow'>
            <div className='card-body'>
              <span className='font-bold'>
                {cart.totalQuantity}{' '}
                {cart.totalQuantity === 1 ? 'Item' : 'Items'}
              </span>
              <span className='text-success font-bold'>
                Subtotal:{cartTotalPrice}
              </span>
              <div className='card-actions'>
                <button
                  className='btn btn-neutral btn-block'
                  onClick={showCart}>
                  View cart
                </button>
              </div>
            </div>
          </div>
          {/* end of dropdown modal */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
