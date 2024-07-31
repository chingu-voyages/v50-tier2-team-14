import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const removeFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  //adds fallback image of a rabbut logo in case img is not dispalyed
  const handleImageError = (e) => {
    e.target.src = '/images/logo/rabbit_logo_1.png';
  };

  return (
    <tr>
      <td>
        <div className='flex items-center gap-3'>
          <div className='avatar'>
            <div className='mask mask-squircle h-12 w-12'>
              <img
                src={item.img}
                onError={handleImageError}
                alt={item.dsc}
              />
            </div>
          </div>
        </div>
      </td>
      <td>{item.name}</td>
      <td>-{item.quantity}+</td>
      <td>{item.totalPrice.toFixed(2)}USD</td>
      <td>
        <button
          className='btn btn-primary btn-circle'
          onClick={() => removeFromCart(item.id)}>
          X
        </button>
      </td>
    </tr>
  );
}

export default CartItem