import React, { useEffect, useState } from 'react';
import coin from '../../images/coin.jpg'

const PaymentSystem = () => {
  const [credits, setCredits] = useState(0);

  const handleCoinClick = () => {
    setCredits(prevCredits => prevCredits+10)
  }

    useEffect(() => {
      const savedCredits = JSON.parse(localStorage.getItem('credits'));
      if (savedCredits) {
        setCredits(savedCredits);
      }
    }, []);
  
  //store in local storage

  useEffect(() => {
    localStorage.setItem('credits', JSON.stringify(credits))
  }, [credits]);
  


  
  return (
    <div className='container mx-auto my-10 px-4 card w-96 shadow-xl'>
      <h2 className='card-title justify-center pt-10'>Your credits</h2>
      <div className='card-body text-center'>
        <p>{credits === 0 ? 'You have 0 credits. Quick, click the coin to add credits to your account!' : `Yaay! You have ${credits} credits.`}</p>
        <div className='flex justify-center'>
          <img
            src={coin}
            alt='coin-image'
            onClick={handleCoinClick}
            width='150'
          />
        </div>
        {credits > 0 && <p>You can now pay for your order or add more credits if you like.</p>}
      </div>
    </div>
  );
}

export default PaymentSystem

//create UI where user can click on coin image and 'add' credit to his account. One click = 10 credits
//display number of credits in a tooltip over the coin image
//store credits in local storage
//connect checkout page to credit system