import Navbar from "./components/Navbar/Navbar";
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { cartActions } from "./store/cart-slice";

function App() {
  const cart = useSelector((state) => state.cart);

  //const dispatch = useDispatch();

  //Initialize state from local storage if available - THIS DOES NOT WORK!!!
  // useEffect(() => {
  //   const getStorageCartData = () => {
  //     const savedCart = JSON.parse(localStorage.getItem('cart'));
  //     console.log('Loaded cart from localStorage:', savedCart);
  //     if (savedCart) {
  //       console.log('saved', savedCart)
  //       dispatch(cartActions.replaceCart(savedCart));//this resets the cart why????
  //       console.log('UPATED CART', cart)
  //     }
  //   };
  //   getStorageCartData();

  // }, [dispatch]);

  // //Save cart data to local storage whenever it changes
  // useEffect(() => {
  //   console.log('storage updated')
  //   console.log('CART', cart)
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }, [cart]);

  return (
    <>
      <Navbar />
      {cart.showCart ? <Cart /> : <Menu />}
    </>
  );
}

export default App;
