import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackSeparateImageLoadingActions } from '../slices/AddNewTrackSeparateImageLoading';

export const setImageCroppedSquareFileMimeType = createAsyncThunk('AddNewTrackSeparateImageLoading/setImageCroppedSquareFileMimeType', async (mimeType: string | undefined, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(AddNewTrackSeparateImageLoadingActions.validateImageCroppedSquareFileMimeType(mimeType))
    dispatch(AddNewTrackSeparateImageLoadingActions.setImageCroppedSquareFileMimeType(mimeType))

});
