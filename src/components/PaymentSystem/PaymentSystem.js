import React, { useEffect, useState } from 'react';
import coin from '../../images/coin.jpg';


const PaymentSystem = () => {
  const [credits, setCredits] = useState(0);

  const handleCoinClick = () => {
    setCredits((prevCredits) => parseInt(prevCredits) + 10);
  };

  //function to get saved credits from localStorage if there are any
  const loadCredits = () => {
    const savedCredits = JSON.parse(localStorage.getItem('credits'));  
    if(savedCredits){
      setCredits(savedCredits);
    }
  };

  // get saved credits from local storage when the component mounts
  useEffect(() => {
    loadCredits();

    // add event listener to listen for updates in local storage
    const handleStorageUpdate = () => {
      loadCredits();
    };
    window.addEventListener('localStorageUpdated', handleStorageUpdate);

    return () => {
      window.removeEventListener('localStorageUpdated', handleStorageUpdate);
    };
  }, []);

  //save credits to local storage when their value changes
  useEffect(() => {
    localStorage.setItem('credits', JSON.stringify(credits));
  }, [credits]);

  return (
    <div className='container mx-auto my-10 px-4 card w-96 shadow-xl'>
      <h2 className='card-title justify-center pt-10'>Your credits</h2>
      <div className='card-body text-center'>
        <p>
          {credits === 0
            ? 'You have 0 credits. Quick, click the coin to add credits to your account!'
            : `Yaay! You have ${credits} credits.`}
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
};

export default PaymentSystem;
