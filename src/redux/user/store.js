import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer, { loadUserDataFromAsyncStorage } from "./authSlice";
// import cartReducer from "../cart/cartSlice";

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    auth: authReducer,
    // cart: cartReducer,
  },
  middleware,
});

store.dispatch(loadUserDataFromAsyncStorage());

export default store;
