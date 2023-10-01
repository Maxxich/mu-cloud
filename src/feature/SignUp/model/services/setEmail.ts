import { createAsyncThunk } from '@reduxjs/toolkit';
import { signupActions } from '../slices/signupSlice';

export const setEmail = createAsyncThunk('signupSlice/setEmail', async (email: string, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(signupActions.validateEmail(email))
    dispatch(signupActions.setEmail(email))

});
