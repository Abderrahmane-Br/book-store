import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: [],

    reducers: {
        setResults: (state, action) => state = action.payload,
    }
});

export const { setResults } = searchSlice.actions;

export default searchSlice.reducer;