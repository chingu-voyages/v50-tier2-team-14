import React from 'react';
import { useDispatch} from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import IncreaseDecreaseAmount from '../UI/IncreaseDecreaseAmount';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(cartActions.removeAllItemsFromCart(id));
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
      <td>
        <IncreaseDecreaseAmount item={item} />       
      </td>
      <td>{item.totalPrice.toFixed(2)} $</td>
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