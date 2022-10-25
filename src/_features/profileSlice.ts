import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { profile } from "../_app/initialState";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        setFirstName: (profile, action) => {
            profile.firstName = action.payload;
        },
        setLastName: (profile, action) => {
            profile.lastName = action.payload;
        },
        setEmail: (profile, action) => {
            profile.email = action.payload;
        },
        setPhone: (profile, action) => {
            profile.phone = action.payload;
        },
        setLocation: (profile, action) => {
            profile.location = action.payload;
        },
        setProfilePic: (profile, action) => {
            profile.profilePic = action.payload;
        },
        setEditing: (profile) => {
            profile.editing = !profile.editing;
        }
    },
})

export const {setFirstName, setLastName, setEmail, setPhone, setLocation, setProfilePic, setEditing } = profileSlice.actions;

export default profileSlice.reducer;