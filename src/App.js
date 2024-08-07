import Navbar from "./components/Navbar/Navbar";
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import { useSelector } from "react-redux";

function App() {
  const cartIsOpen = useSelector(state => state.cart.showCart);

  return (
    <>
      <Navbar />
      {cartIsOpen ? <Cart /> : <Menu />}
    </>
    
  );
}

export default App;
