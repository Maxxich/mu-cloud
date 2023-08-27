import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackActions } from '../slices/AddNewTrackSlice';

export const setImageCroppedSquareFileMimeType = createAsyncThunk('AddNewTrack/setImageCroppedSquareFileMimeType', async (mimeType: string | undefined, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(AddNewTrackActions.validateImageCroppedSquareFileMimeType(mimeType))
    dispatch(AddNewTrackActions.setImageCroppedSquareFileMimeType(mimeType))

});
