import { createSlice } from "@reduxjs/toolkit";
import { updateSessionCache } from "../../components/utilities/helperFun";

const wishlistCache = JSON.parse(sessionStorage.getItem("bookstore/wishlist"));

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: wishlistCache || [],

    reducers: {
        addWish: (state, action) => {
            state.push(action.payload);
            updateSessionCache("bookstore/wishlist", JSON.stringify(state));
        },
        removeWish: (state, action) => {
            state = state.filter(wish => wish.id !== action.payload.id);
            updateSessionCache("bookstore/wishlist", JSON.stringify(state));
            return state;
        },
        clearWishList: state => {
            state = [];
            updateSessionCache("bookstore/wishlist", JSON.stringify(state));
            return state;
        },
    }
});


export const { addWish, removeWish, clearWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;