// This is a dummy component for checking reudx store functionality. remove when real menu component is created.
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';


// Sample menu items
const menuItems = [
  { id: 1, name: 'Burger', price: 8.99 },
  { id: 2, name: 'Pizza', price: 12.99 },
  { id: 3, name: 'Pasta', price: 10.99 },
  { id: 4, name: 'Salad', price: 7.99 },
];

const Menu = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)

    console.log(cart)

    const addToCart = (item) => {
        console.log(item)
        dispatch(cartActions.addToCart({
            name: item.name,
            id: item.id,
            price: item.price
        }))
    }

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
       
      </ul>
    </div>
  );
}

export default Menu