import { configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { CartSlice } from "./Cart/CartSlice";
import { authSlice} from "./auth/authSlice";
import { ordersSlice } from "./orders/orderSlice";

const reducers = combineReducers({
  Cart: CartSlice.reducer,
  auth: authSlice.reducer,
  orders: ordersSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Cart']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export default store;