import React from 'react';
import { useEffect, useState } from 'react';

import MenuItem from './MenuItem';

const Menu = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');

  //latitude and longitude will be passed down from map
  const lat = 39.118173;
  const long = -84.643265;

  //helper function to remove duplicates from array of objects (because there are duplicates in the API)

  const removeDuplicates = (array, key) => {
    const unique = new Set();
    return array.filter((item) => {
      const isDuplicate = unique.has(item[key]);
      unique.add(item[key]);
      return !isDuplicate;
    });
  };

  //filter dishes by restaurant whose lat and long are clicked on

  const fetchMenuData = async () => {
    try {
      const response = await fetch('https://menus-api.vercel.app/');
      const result = await response.json();
      //get our-foods array which includes all the dishes combined from the API
      const allRestaurantsArray = result['our-foods'];
      //find dishes belonging to only target restaurant
      let targetRestaurantMenu = allRestaurantsArray.filter(
        (restaurant) =>
          restaurant.latitude === lat && restaurant.longitude === long
      );
      const uniqueItems = removeDuplicates(targetRestaurantMenu, 'id');
      console.log(uniqueItems);
      //get restaurnt name to display on the page
      let restaurant = uniqueItems[0].name;
      //get restaurant address to display on the page
      let address = uniqueItems[0].country;
      setRestaurantName(restaurant);
      setRestaurantAddress(address);
      setMenuItems(uniqueItems);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

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
      <p className='alert my-8 px-8'>
        If you see this ugly paragraph, autodeploy works!
      </p>
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
