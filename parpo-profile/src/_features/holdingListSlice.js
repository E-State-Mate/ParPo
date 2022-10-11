import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { holdingList } from "../_app/initialState";

export const holdingListSlice = createSlice({
    name: 'holdingList',
    initialState: holdingList,
    reducers: {

    },
})

export const {} = holdingListSlice.actions;

export default holdingListSlice.reducer;