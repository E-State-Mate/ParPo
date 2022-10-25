import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { holdingDetails } from "../_app/initialState";

export const fetchHolding = createAsyncThunk('holdingDetails/fetchHolding', async (id: string | undefined) => {
    const response = await fetch(`https://us-central1-auth-development-92670.cloudfunctions.net/getHoldingById/?id=${id}`, { mode: 'cors'})
    .then(response => response.json())
    return response;
})

export const holdingDetailsSlice = createSlice({
    name: 'holdingDetails',
    initialState: holdingDetails,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchHolding.pending, (holdingDetails: any, action) => {
                holdingDetails.status = 'loading'
            })
            .addCase(fetchHolding.fulfilled, (holdingDetails: any, action) => {
                holdingDetails.status = 'succeeded'
                holdingDetails.featHolding = action.payload
            })
            .addCase(fetchHolding.rejected, (holdingDetails: any, action) => {
                holdingDetails.status = 'failed'
                holdingDetails.error = action.error.message
            })
    }
})

export const {} = holdingDetailsSlice.actions;

export default holdingDetailsSlice.reducer;