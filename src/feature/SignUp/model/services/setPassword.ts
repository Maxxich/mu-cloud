import { createAsyncThunk } from '@reduxjs/toolkit';
import { signupActions } from '../slices/signupSlice';

export const setPassword = createAsyncThunk('signupSlice/setPassword', async (password: string, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(signupActions.validatePassword(password))
    dispatch(signupActions.setPassword(password))

});
