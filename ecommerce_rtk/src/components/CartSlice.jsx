import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  disableProducts: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id == action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
    increaseItemQuantity(state, action) {
      const itemToIncrease = state.cartItems.find(
        (cartItem) => cartItem.id == action.payload
      );
      if (itemToIncrease) itemToIncrease.quantity += 1;
    },
    decreaseItemQuantity(state, action) {
      const itemToDecrease = state.cartItems.find(
        (cartItem) => cartItem.id == action.payload
      );
      if (itemToDecrease && itemToDecrease.quantity > 0)
        itemToDecrease.quantity -= 1;
    },
    disableItem(state, action) {
      state.disableProducts.push(action.payload);
    },
    enableItems(state, action = null) {
      console.log(action);
      if (action.payload) {
        state.disableProducts = state.disableProducts.filter(
          (item) => item !== action.payload
        );
      } else {
        state.disableProducts = [];
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  disableItem,
  enableItems,
} = CartSlice.actions;

export default CartSlice.reducer;
