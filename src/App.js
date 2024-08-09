import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";
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
        <Navbar handleCloseMenu={() => setMenuIsOpen(!menuIsOpen)} />
        {/* {cartIsOpen ? (
          <Cart />
        ) : (
          <Home handleHeroButtonClick={() => setMenuIsOpen(!menuIsOpen)} />
        )} */}
        {cartIsOpen ? (
          <Cart />
        ) : menuIsOpen ? (
          <Menu />
        ) : (
          <Home handleHeroButtonClick={() => setMenuIsOpen(!menuIsOpen)} />
        )}
        {/* {menuIsOpen ? <Menu /> : <Home />} */}
        {/* {cartIsOpen ? <Cart /> : <Menu />} */}
        <Footer />
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
