import { createAsyncThunk } from '@reduxjs/toolkit';
import { EditProfileActions } from '../slices/EditProfileSlice';
import { getStatus } from '../selectors/getStatus';

export const setAndValidateAvatarMimeType = createAsyncThunk('EditProfile/setAndValidateAvatarMimeType', async (mimeType: string, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    // @ts-ignore
    const status = getStatus(getState())
    if (status !== 'edit') return
    dispatch(EditProfileActions.setUploadedAvatarMimeType(mimeType))
    dispatch(EditProfileActions.validateAvatarMimeType())
});
