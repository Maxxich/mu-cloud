import { createAsyncThunk } from '@reduxjs/toolkit';
import { confirmResetPasswordActions } from '../slices/ConfirmResetPasswordSlice';

export const setPasswordConfirm = createAsyncThunk('confirmResetPassword/setPasswordConfirm', async (password: string, thunkApi) => {
    const { dispatch } = thunkApi;


    dispatch(confirmResetPasswordActions.validatePasswordConfirm(password))
    dispatch(confirmResetPasswordActions.setPasswordConfirm(password))

});
