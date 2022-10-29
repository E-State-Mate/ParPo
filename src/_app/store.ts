import { configureStore } from '@reduxjs/toolkit'
import { holdingDetails, holdingList, company, profile } from './initialState'
import holdingDetailsReducer from '../_features/holdingDetailsSlice'
import holdingListReducer from '../_features/holdingListSlice'
import companyReducer from '../_features/companySlice'
import profileReducer from '../_features/profileSlice'

export const initialState = {
    holdingDetails,
    holdingList,
    company,
    profile
}

export const store = configureStore({
    reducer: {
        holdingDetails: holdingDetailsReducer,
        holdingList: holdingListReducer,
        company: companyReducer,
        profile: profileReducer
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;