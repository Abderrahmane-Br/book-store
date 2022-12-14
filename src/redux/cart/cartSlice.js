import { createSlice } from "@reduxjs/toolkit";
import { applyPrecentage, updateSessionCache } from "../../components/utilities/helperFun";

const cartCache = JSON.parse(sessionStorage.getItem("bookstore/cart"));
const initialState = cartCache || {
    items: [],
    amount: 0,
    total: 0.00
}

console.log(initialState)
const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            console.log(cartSlice.caseReducers)
            cartSlice.caseReducers.updateAmount(state);
            cartSlice.caseReducers.updateTotal(state);
        },

        updateItem: (state, action) => {
            const item = state.items.find(itm => itm.id === action.payload.id);
            item.types = action.payload.types;
            cartSlice.caseReducers.updateAmount(state);
        },

        removeItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            item.types = item.types.filter(type => type.name !== action.payload.typeName);
            if (item.types.length === 0)
                state.items = state.items.filter(item => item.id !== action.payload.id);
            cartSlice.caseReducers.updateAmount(state);
            cartSlice.caseReducers.updateTotal(state);
        },

        updateQt: (state, action) => { // Updates a single item qt
            const type = state.items.find(itm => itm.id === action.payload.id)
                .types.find(t => t.name === action.payload.type.name);
            type.quantity = action.payload.type.quantity;
            cartSlice.caseReducers.updateAmount(state);
            cartSlice.caseReducers.updateTotal(state);
        },

        updateAmount: (state) => {  // Counts the total number of items by cumilating up each one's quantity
            updateSessionCache("bookstore/cart", JSON.stringify(state));


            state.amount = state.items.reduce((a, b) => {
                return a + b.types.reduce((a, b) => a + b.quantity, 0)
            }, 0);
        },

        updateTotal: (state) => { // Counts the total price
            updateSessionCache("bookstore/cart", JSON.stringify(state));

            state.total = state.items.reduce((accItem, currItem) => {
                return accItem + currItem.types
                    .reduce((accType, currType) =>
                        accType + currType.quantity * applyPrecentage(currItem.price, currType.name), 0);
            }, 0)
        },


        clearCart: (state) => {
            state.items = [];
            cartSlice.caseReducers.updateAmount(state);
            cartSlice.caseReducers.updateTotal(state);
        }
    }
})

export const { addItem, updateItem, removeItem, updateQt, updateAmount, updateTotal, clearCart } = cartSlice.actions;
export default cartSlice.reducer;