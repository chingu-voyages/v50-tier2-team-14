import React from 'react';

const CartItem = ({item}) => {
  return (
    <li>
      {item.name} X{item.count} <span>{item.price}</span>      
    </li>
  );
}

export default CartItem