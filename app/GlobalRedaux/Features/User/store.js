"use client";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userDataSlice';
import cartReducer from './userCartSlice';
import wishlistReducer from './userWishlistSlice';
const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
    wishlist : wishlistReducer,
},);
export const myStore = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


