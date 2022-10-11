import { configureStore } from '@reduxjs/toolkit'
import { holdingList, company } from './initialState'
import holdingListReducer from '../_features/holdingListSlice'
import companyReducer from '../_features/companySlice'

export const initialState = {
    holdingList,
    company
}

export const store = configureStore({
    reducer: {
        holdingList: holdingListReducer,
        company: companyReducer
    },
    initialState
})