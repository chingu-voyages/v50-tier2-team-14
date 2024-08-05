import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu"
import Maps from "./components/maps"
import FilterState from "./components/FilterState"
import { BrowserRouter, Routes, Route } from 'react-router-dom'



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
