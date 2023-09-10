import { configureStore } from "@reduxjs/toolkit";
//import productsReducer from "../features/products/productSlice";
import { productsApi } from "../features/products/productsApi";
import cartReducer from "../features/cart/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  }
});

setupListeners(store.dispatch);