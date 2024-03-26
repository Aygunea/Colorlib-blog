//store
import BasketSlice from './Slice/BasketSlice';
import CategorySlice from './Slice/ProductsSlice'
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    categories: CategorySlice,
    basket: BasketSlice
  }
})