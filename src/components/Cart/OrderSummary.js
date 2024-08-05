import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { useState } from 'react';

const OrderSummary = () => {
  const [tipAmount, setTipAmount] = useState('');

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const cartTotalPrice = cart.itemsList.reduce((accumulator, item) => {
    return accumulator + item.totalPrice;
  }, 0);

    const cartTotalPriceWithTip = tipAmount ? cartTotalPrice + (cartTotalPrice * parseInt(tipAmount)) / 100 || 0 : cartTotalPrice;
    ;

  const handleCheckoutClick = () => {
    dispatch(cartActions.setShowCheckout());
  };

  const handleTipSelection = (amount) => {
    setTipAmount(amount);
  };

  //TO DO: add custom tip input
  const TipSuggestions = () => {
    return (
      <div className='mb-4'>
        <h3 className='text-lg font-bold mb-4'>Select a Tip Percentage</h3>
        <div className='flex space-x-4 mb-4'>
          <button
            className='btn btn-primary'
            onClick={() => handleTipSelection(15)}>
            15%
          </button>
          <button
            className='btn btn-primary'
            onClick={() => handleTipSelection(18)}>
            18%
          </button>
          <button
            className='btn btn-primary'
            onClick={() => handleTipSelection(22)}>
            22%
          </button>
        </div>
      </div>
    );
  };
  
    
  const OrderTotal = () => {
    return (
      <div className='mb-4'>
        <h4 className='font-bold my-5 p-5 bg-gray-100 rounded-lg shadow'>
          Your total is{' '} 
          <span className='font-bold ml-10'>
            {cartTotalPriceWithTip.toFixed(2)} USD
          </span>
        </h4>
        <button className='btn hover:bg-accent-800 hover:text-white text-black rounded-full w-full py-3'>
          Place order
        </button>
      </div>
    );
  };

  return (
    <div
      className={`w-full  p-6 rounded-lg ${
        !cart.showCheckout ? 'lg:w-1/4 w-full p-6 bg-gray-100 shadow' : ''
      }`}>
      <h3 className='font-bold mt-3 mb-5 text-lg'>Summary</h3>
      <div className='mb-4'>
        Subtotal <span className='ml-10'>{cartTotalPrice} $</span>
      </div>
      <div className='mb-4'>
        Shipping <span className='font-bold ml-10'> FREE</span>
      </div>
      <hr className='my-4 border-t-2 border-gray-300' />
      {!cart.showCheckout && (
        <>
          <div className='py-2 text-lg font-semibold mb-4'>
            Total price: {cartTotalPrice} $
          </div>
          <button
            className='btn hover:bg-accent-800 hover:text-white text-black rounded-full w-full py-3'
            onClick={handleCheckoutClick}>
            Proceed to checkout
          </button>
        </>
      )}
      {cart.showCheckout && (
        <>
          <TipSuggestions />
          <OrderTotal />
        </>
      )}
    </div>
  );
};

export default OrderSummary;
