import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu"
import Maps from "./components/maps"
import Cart from './components/Cart/Cart'
import FilterState from "./components/FilterState"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux"
import Hero from "./components/UI/Hero";
import { useState } from "react";

function App() {
  const cartIsOpen = useSelector(state => state.cart.showCart);
  const [heroIsOpen, setHeroIsOpen] = useState(true);

  const Layout = () => {
    return (
      <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FilterState />} />
      <Route path="/restaurants/:state" element={<Maps />} />
    </Routes>
    </BrowserRouter>
        {cartIsOpen ? <Cart /> : <Menu />}
      </>
    );
}
  return (
    <>
      {heroIsOpen ? (
        <Hero handleHeroButtonClick={() => setHeroIsOpen(false)} />
      ) : (
        <Layout />
      )}

    </>
  );
}

export default App;
