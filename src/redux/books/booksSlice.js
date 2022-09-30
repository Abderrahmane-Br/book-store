import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { findBookById } from "../../components/utilities/helperFun";

const categories = ["Social", "Fiction", "History", "Nature", "Art"];

// export const getBooks = createAsyncThunk("books/getBooks", () => {
//     let promises = [];
//     categories.forEach(cat => {
//         promises.push(fetch(`https://www.googleapis.com/books/v1/volumes?q=${cat}&orderBy=newest`)
//             .then(res => res.json()
//                 .then(data => {
//                     console.log("data: ", cat, JSON.stringify(data));
//                     return ({
//                         cat,
//                         volume: data.items.map(item => ({
//                             ...item,
//                             // isInCart: false,
//                             isInWishlist: false,
//                             paperbackPrice: (Math.random() * 100).toFixed(2),
//                             ratingFB: (Math.random() * 5).toFixed(1)
//                         }))
//                     })
//                 }))
//         )
//     })

//     return Promise.all(promises);
// });
export const getBooks = createAsyncThunk("books/getBooks", () => {
    let promises = [];
    categories.forEach(cat => {
        promises.push(fetch(`http://localhost:8008/${cat}/`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => res.json()
                .then(data => {
                    return ({
                        cat,
                        volume: data.items.map(item => ({
                            ...item,
                            isInCart: false,
                            isInWishlist: false,
                            paperbackPrice: (Math.random() * 100).toFixed(2),
                            ratingFB: (Math.random() * 5).toFixed(1)
                        }))
                    })
                }))
        )
    })

    return Promise.all(promises);
});


const booksSlice = createSlice({
    name: "books",
    initialState: {
        list: [],
        isLoading: true
    },

    reducers: {
        // addedToCart: (state, action) => {
        //     const book = findBookById(state, action.payload);
        //     if (book)
        //         book.isInCart = true;
        // }
    },

    extraReducers: {
        [getBooks.fulfilled]: (state, action) => {
            console.log("payload", action.payload);
            state.list.push(...action.payload);
            state.isLoading = false
        }
    }
})


export const { addedToCart } = booksSlice.actions;

export default booksSlice.reducer;