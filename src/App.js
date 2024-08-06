import Navbar from "./components/Navbar/Navbar";
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import { useSelector } from "react-redux";
import Hero from "./components/UI/Hero";
import { useState } from "react";

function App() {
  const cartIsOpen = useSelector(state => state.cart.showCart);  const [heroIsOpen, setHeroIsOpen] = useState(true);

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Menu />
      </>
    );
}
  return (
    <>
      {heroIsOpen ? (
        <Hero handleHeroButtonClick={() => setHeroIsOpen(false)} />
      ) : (
        {cartIsOpen ? <Cart /> : <Layout  />}
      )}
    </>
  );
}

export default App;
