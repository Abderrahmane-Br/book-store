import { createSlice } from "@reduxjs/toolkit";
import { applyPrecentage } from "../../components/utilities/helperFun";

const initialState = {
    items: [],
    amount: 0,
    total: 0.00
}

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addItem: (state, action) => { state.items.push(action.payload) },

        updateItem: (state, action) => {
            const item = state.items.find(itm => itm.id === action.payload.id);
            item.types = action.payload.types;
        },

        removeItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            item.types = item.types.filter(type => type.name !== action.payload.typeName);
            if (item.types.length === 0)
                state.items = state.items.filter(item => item.id !== action.payload.id);
        },

        updateQt: (state, action) => {
            const type = state.items.find(itm => itm.id === action.payload.id)
                .types.find(t => t.name === action.payload.type.name);
            type.quantity = action.payload.type.quantity;
        },

        updateAmount: (state) => {
            state.amount = state.items.reduce((a, b) => {
                return a + b.types.reduce((a, b) => a + b.quantity, 0)
            }, 0);
        },

        updateTotal: (state) => {
            state.total = state.items.reduce((accItem, currItem) => {
                return accItem + currItem.types
                    .reduce((accType, currType) =>
                        accType + currType.quantity * applyPrecentage(currItem.price, currType.name), 0);
            }, 0)
        },

        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { addItem, updateItem, removeItem, updateQt, updateAmount, updateTotal, clearCart } = cartSlice.actions;
export default cartSlice.reducer;