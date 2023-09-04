import { createAsyncThunk } from '@reduxjs/toolkit';
import { signupActions } from '../slices/signupSlice';

export const setPassword = createAsyncThunk('signupSlice/setPassword', async (password: string, thunkApi) => {
    const { dispatch } = thunkApi;

    if (password[0] === ' ') return
    if (password[password.length-1] === ' ') return

    dispatch(signupActions.validatePassword(password))
    dispatch(signupActions.setPassword(password))

});
