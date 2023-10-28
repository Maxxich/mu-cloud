import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackSeparateImageLoadingActions } from '../slices/AddNewTrackSeparateImageLoading';

export const setUploadCode = createAsyncThunk('AddNewTrackSeparateImageLoading/setUploadCode', async (code: string, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(AddNewTrackSeparateImageLoadingActions.validateUploadCode(code))
    dispatch(AddNewTrackSeparateImageLoadingActions.setUploadCode(code))

});
