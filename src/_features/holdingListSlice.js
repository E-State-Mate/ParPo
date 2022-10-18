import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { holdingList } from "../_app/initialState";

export const fetchHoldings = createAsyncThunk('holdingList/fetchHoldings', async (id) => {
    const response = await fetch('https://us-central1-auth-development-92670.cloudfunctions.net/getHoldings', { mode: 'cors'})
    .then(response => response.json())
    return response;
})

export const holdingListSlice = createSlice({
    name: 'holdingList',
    initialState: holdingList,
    reducers: {
        setVisibleHoldings: (holdingList, action) => {
            holdingList.visibleHoldings = action.payload
        },
        setFilterList: (holdingList, action) => {
            const propType = action.payload;
            const {filterList, holdings} = holdingList
            if(filterList.includes(propType)){
                holdingList.filterList = filterList.filter(item => item !== propType) // 2nd parameter means remove one item only
            } else {
                holdingList.filterList = [...filterList, propType]
            }
        },
        setListCount: (holdingList, action) => {
            holdingList.listCount = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchHoldings.pending, (holdingList, action) => {
                holdingList.status = 'loading'
            })
            .addCase(fetchHoldings.fulfilled, (holdingList, action) => {
                holdingList.status = 'succeeded'
                holdingList.holdings = action.payload
            })
            .addCase(fetchHoldings.rejected, (holdingList, action) => {
                holdingList.status = 'failed'
                holdingList.error = action.error.message
            })
    }
})

export const { setFilterList, setListCount, setVisibleHoldings } = holdingListSlice.actions;

export default holdingListSlice.reducer;