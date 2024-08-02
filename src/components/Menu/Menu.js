import React from 'react';
import { useEffect } from 'react';
import { fetchMenuData } from '../../store/menu-slice';

import MenuItem from './MenuItem';
import { useDispatch, useSelector } from 'react-redux';

const Menu = () => {

  const dispatch = useDispatch();
  const { menuItems, restaurantName, restaurantAddress, loading, error } = useSelector(state => state.menu);

  //latitude and longitude will be passed down from map
  const lat = 40.731142;
  const long = -73.915005;

  useEffect(() => {
    if (menuItems.length === 0) {
      dispatch(fetchMenuData({lat, long}));
    }
  }, [dispatch, menuItems.length, lat, long]);

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
