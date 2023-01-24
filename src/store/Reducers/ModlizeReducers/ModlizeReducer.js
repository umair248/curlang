import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    HomePageAddOptions: false
};

export const AuthReducer = createSlice({
    name: 'JumbilinAuth',
    initialState,
    reducers: {
        HomePageAddOptions: (state, action) => {
            state.HomePageAddOptions = action.payload;
        },
    },
});

export const { HomePageAddOptions } = AuthReducer.actions;
export default AuthReducer.reducer;