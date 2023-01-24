import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    LoginUser: false,
    UserDetail: [],
    Step: null,
    TokenId: [],
};

export const AuthReducer = createSlice({
    name: 'CurlangAuth',
    initialState,
    reducers: {
        LoginUser: (state, action) => {
            state.LoginUser = action.payload;
        },
        UserDetail: (state, action) => {
            state.UserDetail = action.payload;
        },
        Step: (state, action) => {
            state.Step = action.payload;
        },
        TokenId: (state, action) => {
            state.TokenId = action.payload;
        },
        LogOut: (state, action) => {
            (state.LoginUser = false),
                (state.UserDetail = []),
                (state.TokenId = []),
                (state.Step = null)
                ;
        },
    },
});

export const { LoginUser, UserDetail, first, TokenId, LogOut, Step } = AuthReducer.actions;
export default AuthReducer.reducer;