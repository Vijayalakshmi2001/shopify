import { createSlice } from "@reduxjs/toolkit";

interface cartSlicetype {
    selectedProducts: any;
}
const initialState: cartSlicetype ={
    selectedProducts: [],
};
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setProducts(state, payload: any) {
            state.selectedProducts = [...state.selectedProducts, payload.payload];
        },
        updateProducts(state, payload: any) {
            state.selectedProducts = payload.payload;
        },
    },
});