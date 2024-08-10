import React from 'react';
import { useEffect } from 'react';
import { fetchMenuData } from '../../store/menu-slice';

import MenuItem from './MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cart from '../Cart/Cart';


const Menu = () => {
  const dispatch = useDispatch();
  const { menuItems, restaurantName, restaurantAddress, loading, error } =
    useSelector((state) => state.menu);
  

  //latitude and longitude will be passed down from map
  // const lat = 40.787681;
  // const long = -74.256066;
  const { name } = useParams();

  useEffect(() => {
    if (menuItems.length === 0) {
      dispatch(fetchMenuData({ name }));
    }
  }, [dispatch, menuItems.length, name]);

  //TO DO: spinner component
  if (loading) {
    return <div>Loading...</div>;
  }
  //TO DO: error component
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
     
    <div className='container mx-auto px-8'>
      <h2 className='text-center text-3xl font-bold mt-4'>{restaurantName}</h2>
      <p className='text-center mb-4'>{restaurantAddress}</p>
      <div className='flex flex-wrap gap-4 justify-center'>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
