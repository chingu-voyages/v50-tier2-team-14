// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { cartActions } from '../../store/cart-slice';
// import { FaShoppingBag } from 'react-icons/fa';

// const CartIcon = () => {
//   const cart = useSelector((store) => store.cart);
//   const dispatch = useDispatch();

//   const totalItemsInCart = cart.totalQuantity;

//   const showCart = () => {
//     dispatch(cartActions.setShowCart());
//   };

//   const CartIconText = () => {
//     if (cart.totalQuantity === 1) {
//       return <h1>Cart: 1 item</h1>;
//     }
//     if (cart.totalQuantity === 0) {
//       return <h1>Your Cart is empty</h1>;
//     }
//     return <h1>{`Cart: ${totalItemsInCart} items`}</h1>;
//   };

//   return (
//     <button className='btn bg-secondary hover:bg-accent text-white' onClick={showCart}>
//       <FaShoppingBag />
//       <CartIconText />
//     </button>
//   );
// };

// export default CartIcon;
