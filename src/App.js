import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";
import Hero from "./components/UI/Hero";
import { useState } from "react";
import Home from "./components/Home/Home";

function App() {
  const cartIsOpen = useSelector((state) => state.cart.showCart);
  const [heroIsOpen, setHeroIsOpen] = useState(false);

  const Layout = () => {
    return (
      <>
        <Navbar />
        {cartIsOpen ? <Cart /> : <Home />}
        {/* {cartIsOpen ? <Cart /> : <Menu />} */}
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
