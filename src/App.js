import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu"
import Maps from "./components/maps"
import Cart from './components/Cart/Cart'
import FilterState from "./components/FilterState"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux"



function App() {
  const cartIsOpen = useSelector(state => state.cart.showCart);

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<FilterState />} />
      <Route path="/restaurants/:state" element={<Maps />} />
    </Routes>
    {cartIsOpen ? <Cart /> : <Menu />}
    </BrowserRouter>
  </>
  );
}

export default App;
