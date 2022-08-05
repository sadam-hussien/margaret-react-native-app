import {createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart_reducer',
  initialState: {cart: []},
  reducers: {
    add_item: (state, action) => {
      state.cart.unshift(action.payload);
    },
    remove_item: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export default cart.reducer;

export const {add_item, remove_item} = cart.actions;
