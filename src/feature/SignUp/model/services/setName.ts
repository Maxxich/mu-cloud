import { createAsyncThunk } from '@reduxjs/toolkit';
import { signupActions } from '../slices/signupSlice';

export const setName = createAsyncThunk('signupSlice/setName', async (name: string, thunkApi) => {
    const { dispatch } = thunkApi;

    if (name[0] === ' ') return

    dispatch(signupActions.validateName(name))
    dispatch(signupActions.setName(name))

});
