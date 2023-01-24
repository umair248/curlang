import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    UserCourses: []
};

export const AppReducer = createSlice({
    name: 'JumbilinAuth',
    initialState,
    reducers: {
        UserCourses: (state, action) => {
            state.UserCourses = action.payload;
        },
    },
});

export let { UserCourses } = AppReducer.actions;
export default AppReducer.reducer;