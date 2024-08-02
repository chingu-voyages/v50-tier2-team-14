import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    menuItems: [],
    restaurantName: '',
    restaurantAddress: '',
    loading: false,
    error: null,
}

export const fetchMenuData = createAsyncThunk('menu/fetchMenuData',
    async ({ lat, long }) => {
        const response = await fetch('https://menus-api.vercel.app/');
        const result = await response.json();
        //get our-foods array which includes all the dishes combined from the API
        const allRestaurantsArray = result['our-foods'];
        //find dishes belonging to only target restaurant
        let targetRestaurantMenu = allRestaurantsArray.filter(
            (restaurant) =>
                restaurant.latitude === lat && restaurant.longitude === long
        );
        //remove duplicates from targetRestaurantMenu
        const uniqueItems = Array.from(new Set(targetRestaurantMenu.map(item => item.id))).map(id => targetRestaurantMenu.find(item => item.id === id));
        //get restaurnt name to display on the page
        const restaurant = uniqueItems[0]?.name || '';
        //get restaurant address to display on the page
        const address = uniqueItems[0]?.country || '';
        return { menuItems: uniqueItems, restaurantName: restaurant, restaurantAddress: address };
    }
);

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenuData.pending, (state, action) => {
            state.loading = true;
            state.error = null;
            })
            .addCase(fetchMenuData.fulfilled, (state, action) => {
                state.menuItems = action.payload.menuItems;
                state.restaurantName = action.payload.restaurantName;
                state.restaurantAddress = action.payload.restaurantAddress;
                state.loading = false;               
            })
            .addCase(fetchMenuData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
        })
    }
})

export default menuSlice;