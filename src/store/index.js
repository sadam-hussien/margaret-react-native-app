import {configureStore, combineReducers} from '@reduxjs/toolkit';

import globalReducer from './globalReducer';

import cartReducer from '../modules/cart/store';

const reducers = combineReducers({
  global: globalReducer,
  cart: cartReducer,
});

export default configureStore({
  reducer: reducers,
});
