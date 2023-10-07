import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackSeparateImageLoadingActions } from '../slices/AddNewTrackSeparateImageLoading';

export const setImageCroppedWideFileMimeType = createAsyncThunk('AddNewTrackSeparateImageLoading/setImageCroppedWideFileMimeType', async (mimeType: string | undefined, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(AddNewTrackSeparateImageLoadingActions.validateImageCroppedWideFileMimeType(mimeType))
    dispatch(AddNewTrackSeparateImageLoadingActions.setImageCroppedWideFileMimeType(mimeType))

});
