import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { useEffect, useState } from 'react';
import SuccessAlert from '../UI/SuccessAlert';
import ErrorAlert from '../UI/ErrorAlert';

//TODO: redirect to homepage after order has been placed

const OrderSummary = () => {
  const [tipAmount, setTipAmount] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderError, setOrderError] = useState(false);
 const [notEnoughCredits, setNotEnoughCredits] = useState(false);
 const [cartEmpty, setCartEmpty] = useState(false);

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  //display green or red alert for 5 seconds on orderplaced button click
  useEffect(() => {
    if (orderPlaced || orderError) {
      const timer = setTimeout(() => {
          setOrderPlaced(false);      
          setOrderError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [orderPlaced, orderError]);

  const cartTotalPrice = cart.itemsList.reduce((accumulator, item) => {
    return accumulator + item.totalPrice;
  }, 0);

  const cartTotalPriceWithTip = tipAmount
    ? cartTotalPrice + (cartTotalPrice * parseInt(tipAmount)) / 100 || 0
    : cartTotalPrice;

  const savedCredits = JSON.parse(localStorage.getItem('credits')) || 0;

   useEffect(() => {
     setNotEnoughCredits(savedCredits < cartTotalPriceWithTip);
     setCartEmpty(cart.totalQuantity === 0);
   }, [cart.totalQuantity, cartTotalPriceWithTip, savedCredits]);
  
  const handleCheckoutClick = () => {
    dispatch(cartActions.setShowCheckout());
  };

  const handleTipSelection = (amount) => {
    setTipAmount(amount);
  };

  
  //update local storage when order is placed and dispatch custom event
  
  const updateLocalStorage = (newCredits) => {
    localStorage.setItem('credits', JSON.stringify(newCredits));
    window.dispatchEvent(new Event('localStorageUpdated'))
  }

  const handlePlaceOrder = () => {
   
    setOrderError(false);
    // Check if there are enough credits and if the cart is not empty
    if (notEnoughCredits || cartEmpty) {
      //display red alert
      setOrderPlaced(false);
      setOrderError(true);
    } else {
      //display green alert
      setOrderPlaced(true);
      //reset the cart
      dispatch(cartActions.resetCart());
      //update localstorage
      updateLocalStorage((savedCredits - cartTotalPriceWithTip).toFixed(2));
    }
  };

  //TO DO: add custom tip input

  const TipSuggestions = () => {
    return (
      <div className='mb-4'>
        <h3 className='text-lg font-bold mb-4'>Select a Tip Percentage</h3>
        <div className='flex space-x-3 mb-4'>
          {[15, 18, 22, 0].map((tip) => {
            return (
              <button
                className={`btn ${
                  tipAmount === tip ? 'btn-primary' : 'btn-secondary'
                }`}
                key={tip}
                onClick={() => handleTipSelection(tip)}>
                {tip === 0 ? 'No Tip' : `${tip}%`}
              </button>
            );
          })}
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
        <button
          className='btn hover:bg-accent-800 hover:text-white text-black rounded-full w-full py-3'
          onClick={handlePlaceOrder}>
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

      {/* order summary with 'proceed to checkout' button displayed within the cart component*/}
      {!cart.showCheckout && (
        <>
          <div className='py-2 text-lg font-semibold mb-4'>
            TOTAL PRICE: {cartTotalPrice} $
          </div>
          <button
            className='btn hover:bg-accent-800 hover:text-white text-black rounded-full w-full py-3'
            onClick={handleCheckoutClick}>
            Proceed to checkout
          </button>
        </>
      )}

      {/* order summary with 'place order' button displayed within the checkout component*/}
      {cart.showCheckout && (
        <>
          <TipSuggestions />
          <OrderTotal />
          {orderPlaced && <SuccessAlert />}
          {orderError && (
            <ErrorAlert
              message={
                notEnoughCredits
                  ? 'Not enough credits.'
                  : 'Your cart is empty. Add items to your cart to place order!'
              }
            />
          )}
        </>
      )}
    </div>
  );
};

export default OrderSummary;
