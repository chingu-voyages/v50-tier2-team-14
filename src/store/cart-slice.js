import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    showCheckout: false,
    changed: false,
  },
  reducers: {
    //adds as many items as user selected
    addToCart(state, action) {
      state.changed = true;
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
      state.changed = true;
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
    //removes all items of the same kind from cart
    removeAllItemsFromCart(state, action) {
      state.changed = true;
      const idToRemove = action.payload;
      const existingItem = state.itemsList.find(item => item.id === idToRemove);
      state.itemsList = state.itemsList.filter(item => item.id !== idToRemove);
      state.totalQuantity -= existingItem.quantity;
    },
    resetCart(state) {
      state.changed = true;
      state.itemsList = [];
      state.totalQuantity = 0;
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
      state.showCheckout = false;
    },
    setShowCheckout(state) {
      state.showCheckout = !state.showCheckout;
    },
    //replaces cart data with data from localStorage
    replaceCart(state, action) {
      console.log(action)
      const { itemsList = [], totalQuantity = 0 } =
        action.payload;
      state.itemsList = itemsList;
      state.totalQuantity = totalQuantity;
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
