import { createAsyncThunk } from '@reduxjs/toolkit';
import { signupActions } from '../slices/signupSlice';

export const setEmail = createAsyncThunk('signupSlice/setEmail', async (email: string, thunkApi) => {
    const { dispatch } = thunkApi;

    if (email[0] === ' ') return
    if (email[email.length-1] === ' ') return

    dispatch(signupActions.validateEmail(email))
    dispatch(signupActions.setEmail(email))

});
