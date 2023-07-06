'use client'
import { createSlice } from "@reduxjs/toolkit";

interface CartItems {
  title: string;
  price: string;
  image: string;
}
export interface cartType {
  count: number;
  cartItems: CartItems[];
}

const initialState: cartType = {
  count: 0,
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.count += 1;
      state.cartItems.push(action.payload);
    },

    removeFromCart: (state, action) => {
       state.count -= 1;
       let index = state.cartItems.findIndex(item => item.title === action.payload.title)
       state.cartItems.splice(index, 1);
    },

    clearCart : (state) => {
        state.count = 0;
        state.cartItems = [];
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
