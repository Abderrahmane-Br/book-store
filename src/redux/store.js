import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/booksSlice";
import cartReducer from "./cart/cartSlice";
import searchSlice from "./search/searchSlice";
import wishlistReducer from "./wishlist/wishlistSlice";

const store = configureStore({

    reducer: {
        books: booksReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        search: searchSlice,
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;