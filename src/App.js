import Navbar from "./components/Navbar/Navbar";
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import { useSelector } from "react-redux";
//import PaymentSystem from "./components/PaymentSystem/PaymentSystem";

function App() {
  const cartIsOpen = useSelector(state => state.cart.showCart);

  return (
    <>
      <Navbar />
      {cartIsOpen ? <Cart /> : <Menu />}
    </>
    //<PaymentSystem />
  );
}

export default App;
