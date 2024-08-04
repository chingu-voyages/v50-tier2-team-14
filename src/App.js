import Navbar from "./components/Navbar/Navbar";

import Menu from "./components/Menu/Menu";
import Hero from "./components/UI/Hero";
import { useState } from "react";


function App() {
  const [heroIsOpen, setHeroIsOpen] = useState(true);

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
        <Layout />
      )}
    </>
  );
}

export default App;
