import Navbar from "./components/Navbar/Navbar";
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cartActions } from "./store/cart-slice";

let isFirstRender = true;

function App() {
  const cart = useSelector((state) => state.cart);
console.log('Cart',cart)
  //TO DO add cart state to local storage
  const dispatch = useDispatch();

  //Initialize state from local storage if available - THIS DOES NOT WORK!!!
  useEffect(() => {
    const getStorageCartData = () => {
      const savedCart = JSON.parse(localStorage.getItem('cart'));
      console.log('Loaded cart from localStorage:', savedCart);
      if (savedCart) {
        
        dispatch(
          cartActions.replaceCart({
            itemsList: savedCart.itemsList || [],
            totalQuantity: savedCart.totalQuantity || 0,
          })
        );
        
      }
    };
    getStorageCartData();

  }, [dispatch]);

  // //Save cart data to local storage whenever it changes
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      // console.log('storage updated')
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    
  }, [cart]);

  return (
    <>
      <Navbar />
      {cart.showCart ? <Cart /> : <Menu />}
    </>
  );
}

export default App;
