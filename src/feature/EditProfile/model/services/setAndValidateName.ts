import { createAsyncThunk } from '@reduxjs/toolkit';
import { EditProfileActions } from '../slices/EditProfileSlice';
import { getStatus } from '../selectors/getStatus';

export const setAndValidateName = createAsyncThunk('EditProfile/setAndValidateName', async (name: string, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    // @ts-ignore
    const status = getStatus(getState())
    if (status !== 'edit') return
    dispatch(EditProfileActions.setName(name))
    dispatch(EditProfileActions.validateName())
});
