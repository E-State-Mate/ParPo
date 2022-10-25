import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { company } from "../_app/initialState";

export const companySlice = createSlice({
    name: 'company',
    initialState: company,
    reducers: {
        togglesDarkMode: (company: any) => {
            company.isDarkMode = !company.isDarkMode;
        },
    },
})

export const {togglesDarkMode} = companySlice.actions;

export default companySlice.reducer;