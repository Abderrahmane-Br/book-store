import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],

    reducers: {
        addWish: (state, action) => {
            state.push(action.payload);
        },
        removeWish: (state, action) => state = state.filter(wish => wish.id !== action.payload.id),
        clearWishList: state => [],
    }
});


export const { addWish, removeWish, clearWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;