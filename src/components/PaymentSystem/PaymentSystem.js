import React, { useEffect, useState } from 'react';
import coin from '../../images/coin.jpg'

const PaymentSystem = () => {
  const [credits, setCredits] = useState(0);

  const handleCoinClick = () => {
    setCredits((prevCredits) => parseInt(prevCredits) + 10);
  };

  // Retrieve from localStorage
  useEffect(() => {
    const updateCredits = () => {
      const savedCredits = JSON.parse(localStorage.getItem('credits'));
      if (savedCredits) {
        setCredits(savedCredits);
      }
    };

    // Initial load
    updateCredits();

    // Event listeners for localStorage changes
    window.addEventListener('localStorageUpdated', updateCredits);
    window.addEventListener('storage', updateCredits);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('localStorageUpdated', updateCredits);
      window.removeEventListener('storage', updateCredits);
    };
  }, []);

  // Store in local storage whenever credits state changes
  useEffect(() => {
    localStorage.setItem('credits', JSON.stringify(credits));
    window.dispatchEvent(new Event('localStorageUpdated'))
  }, [credits]);

  return (
    <div className='container mx-auto my-10 px-4 card w-96 shadow-xl'>
      <h2 className='card-title justify-center pt-10'>Your credits</h2>
      <div className='card-body text-center'>
        <p>
          {credits === 0
            ? 'You have 0 credits. Quick, click the coin to add credits to your account!'
            : `Yaay! You have ${parseInt(credits)} credits.`}
        </p>
        <div className='flex justify-center'>
          <img
            src={coin}
            alt='coin-image'
            onClick={handleCoinClick}
            width='150'
          />
        </div>
        {credits > 0 && (
          <p>You can now pay for your order or add more credits if needed.</p>
        )}
      </div>
    </div>
  );
}

export default PaymentSystem
