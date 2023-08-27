import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackActions } from '../slices/AddNewTrackSlice';

export const setImageCroppedWideFileMimeType = createAsyncThunk('AddNewTrack/setImageCroppedWideFileMimeType', async (mimeType: string | undefined, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(AddNewTrackActions.validateImageCroppedWideFileMimeType(mimeType))
    dispatch(AddNewTrackActions.setImageCroppedWideFileMimeType(mimeType))

});
