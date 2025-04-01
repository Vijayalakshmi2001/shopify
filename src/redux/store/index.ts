import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "../home/homeSlice";
import { cartSlice } from "../cart/cartSlice";

const rootReducer = combineReducers({
    home: homeSlice.reducer,
    cart: cartSlice.reducer,
});
export const Store = configureStore({
    reducer: rootReducer,
});