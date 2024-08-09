import Navbar from "./components/Navbar/Navbar";
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cartActions } from "./store/cart-slice";

let isFirstRender = true;

function App() {
  const cart = useSelector((state) => state.cart);
 
  const dispatch = useDispatch();

  //Initialize state from local storage if available
  useEffect(() => {
    const getStorageCartData = () => {
      const savedCart = JSON.parse(localStorage.getItem('cart'));
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

  // Save cart data to local storage whenever it changes
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
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
