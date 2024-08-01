import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
// TO DO: add addtocart and remove from cart handlers
const IncreaseDecreaseAmount = ({ item }) => {
    const dispatch = useDispatch();

    const addOneItemToCart = (item) => {
        dispatch(
            cartActions.addToCart({
                id: item.id,
                price: item.price,
                quantity: 1,
                name: item.dsc,
                img: item.img,
            })
        );
    };

    const removeOneItemFromCart = (id) => {
        dispatch(cartActions.removeFromCart(id));
    };

  return (
    <div className='flex items-center'>
      <button className='btn btn-secondary' onClick={() => removeOneItemFromCart(item.id)}>-</button>
      <span className='px-2'>{item.quantity}</span>
      <button
        className='btn btn-primary'
        onClick={() => addOneItemToCart(item)}>
        +
      </button>
    </div>
  );
}

export default IncreaseDecreaseAmount