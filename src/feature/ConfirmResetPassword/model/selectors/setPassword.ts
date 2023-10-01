import { createAsyncThunk } from '@reduxjs/toolkit';
import { confirmResetPasswordActions } from '../slices/ConfirmResetPasswordSlice';

export const setPassword = createAsyncThunk('confirmResetPassword/setPassword', async (password: string, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(confirmResetPasswordActions.validatePassword(password))
    dispatch(confirmResetPasswordActions.setPassword(password))

});
