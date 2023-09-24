import { createAsyncThunk } from '@reduxjs/toolkit';
import { EditProfileActions } from '../slices/EditProfileSlice';
import { getStatus } from '../selectors/getStatus';

export const setAndValidateAdress = createAsyncThunk('EditProfile/setAndValidateAdress', async (adress: string, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    // @ts-ignore
    const status = getStatus(getState())
    if (status !== 'edit') return
    dispatch(EditProfileActions.setAdress(adress))
    dispatch(EditProfileActions.validateAdress())
});
