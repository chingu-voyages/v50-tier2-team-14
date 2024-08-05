import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import menuSlice from "./menu-slice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        menu: menuSlice.reducer
    }
});

export default store;

