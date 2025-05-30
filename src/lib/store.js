import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slice/usersSlice";
import productsApi from "./api/productsApi";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
