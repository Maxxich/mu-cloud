import { createAsyncThunk } from '@reduxjs/toolkit';
import { signupActions } from '../slices/signupSlice';

export const setPasswordConfirm = createAsyncThunk('signupSlice/setPasswordConfirm', async (password: string, thunkApi) => {
    const { dispatch } = thunkApi;

    if (password[0] === ' ') return
    if (password[password.length-1] === ' ') return

    dispatch(signupActions.validatePasswordConfirm(password))
    dispatch(signupActions.setPasswordConfirm(password))

});
