import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackSeparateImageLoadingActions } from '../slices/AddNewTrackSeparateImageLoading';

export const setAudioFileMimeType = createAsyncThunk('AddNewTrackSeparateImageLoading/setAudioFileMimeType', async (mimeType: string | undefined, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(AddNewTrackSeparateImageLoadingActions.validateAudioFileMimeType(mimeType))
    dispatch(AddNewTrackSeparateImageLoadingActions.setAudioFileMimeType(mimeType))

});
