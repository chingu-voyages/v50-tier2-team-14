import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu"
import RestaurantsByState from "./components/Map/RestaurantsByState"
import Cart from './components/Cart/Cart'
import FilterState from "./components/Map/FilterState"
import FilterByCategory from "./components/Map/FilterByCategory"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux"
import Hero from "./components/UI/Hero";
import { useState } from "react";
import Home from "./components/Home/Home";
import Footer from "./components/UI/Footer";

function App() {
  const cartIsOpen = useSelector((state) => state.cart.showCart);
  const [heroIsOpen, setHeroIsOpen] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const Layout = () => {
    return (
      <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FilterState />} />
      <Route path="/restaurants/:state" element={<RestaurantsByState />} />
      <Route path="/category-map/:state/:category" element={<FilterByCategory />} />
    </Routes>
    </BrowserRouter>
        {cartIsOpen ? <Cart /> : <Menu />}

//   THese are changes from development branch with homepage UI. we need to update this page so everything displays correctly with react router
//         <Navbar handleCloseMenu={() => setMenuIsOpen(!menuIsOpen)} />
//         {/* {cartIsOpen ? (
//           <Cart />
//         ) : (
//           <Home handleHeroButtonClick={() => setMenuIsOpen(!menuIsOpen)} />
//         )} */}
//         {cartIsOpen ? (
//           <Cart />
//         ) : menuIsOpen ? (
//           <Menu />
//         ) : (
//           <Home handleHeroButtonClick={() => setMenuIsOpen(!menuIsOpen)} />
//         )}
//         {/* {menuIsOpen ? <Menu /> : <Home />} */}
//         {/* {cartIsOpen ? <Cart /> : <Menu />} */}
//         <Footer />

      </>
    );
  };
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
