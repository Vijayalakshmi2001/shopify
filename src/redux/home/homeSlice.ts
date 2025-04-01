import { createSlice } from "@reduxjs/toolkit";

interface homeSlicetype {
    loading: Boolean;
}
const initialState: homeSlicetype ={
    loading: true,
};
export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setLoading(state: any) {
            state.loading = !state.loading;
        },
    },
});