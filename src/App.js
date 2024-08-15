import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/UI/Hero';
import Menu from './components/Menu/Menu';
import RestaurantsByState from './components/Map/RestaurantsByState';
import FilterState from './components/Map/FilterState';
import FilterByCategory from './components/Map/FilterByCategory';
import Cart from './components/Cart/Cart';
import About from './components/UI/About';
import HowTo from './components/UI/HowTo';
import Testimonials from './components/UI/Testimonials';
import Footer from './components/UI/Footer';

import { cartActions } from './store/cart-slice';
import Home from './components/Home/Home';

let isFirstRender = true;

function App() {
  const cart = useSelector((state) => state.cart);

  const cartIsOpen = useSelector((state) => state.cart.showCart);
  const [heroIsOpen, setHeroIsOpen] = useState(true);

  const dispatch = useDispatch();

  //Initialize state from local storage if available
  useEffect(() => {
    const getStorageCartData = () => {
      const savedCart = JSON.parse(localStorage.getItem('cart'));
      if (savedCart) {
        dispatch(
          cartActions.replaceCart({
            itemsList: savedCart.itemsList || [],
            totalQuantity: savedCart.totalQuantity || 0,
          })
        );
      }
    };
    getStorageCartData();
  }, [dispatch]);

  // Save cart data to local storage whenever it changes
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/restaurants/:state'
            element={<RestaurantsByState />}
          />
          <Route
            path='/category-map/:state/:category'
            element={<FilterByCategory />}
          />
          <Route
            path='/restaurants/menu/:name'
            element={<Menu />}
          />
          <Route
            path='/cart'
            element={<Cart />}
          />
        </Routes>
      </>
    );
  };

  return (
    <BrowserRouter>
      {heroIsOpen ? (
        <Hero handleHeroButtonClick={() => setHeroIsOpen(false)} />
      ) : (
        <Layout />
      )}
    </BrowserRouter>
  );
}

export default App;
