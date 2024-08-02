import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    //adds as many items as user selected
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price * newItem.quantity,
          quantity: newItem.quantity,
          name: newItem.name,
          img: newItem.img
        });
      }
      state.totalQuantity += newItem.quantity;
    },
    //removes 1 item from cart
    removeFromCart(state, action) {
      const idToRemove = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === idToRemove
      );
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(
          (item) => item.id !== idToRemove
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;

    },
    removeAllItemsFromCart(state, action) {
      const idToRemove = action.payload;
      const existingItem = state.itemsList.find(item => item.id === idToRemove);
      state.itemsList = state.itemsList.filter(item => item.id !== idToRemove);
      state.totalQuantity -= existingItem.quantity;
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
