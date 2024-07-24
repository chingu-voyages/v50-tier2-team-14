import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import CartIcon from "./components/Cart/CartIcon";
import Menu from "./components/Menu/Menu";

function App() {
  const { showCart } = useSelector(state => state.cart)
  
  console.log(showCart)
  return (
    <div className='App'>
      <header className='App-header'>
        <p className='text-5xl flex justify-center font-extrabold text-orange-500 mt-10'>
          Hungry Rabbit
        </p>
        <CartIcon />
      </header>

      <Menu />
      {showCart && <Cart />}
    </div>
  );
}

export default App;
