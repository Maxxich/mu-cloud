import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackActions } from '../slices/AddNewTrackSlice';

export const setImageFileMimeType = createAsyncThunk('AddNewTrack/setImageFileMimeType', async (mimeType: string | undefined, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(AddNewTrackActions.validateImageFileMimeType(mimeType))
    dispatch(AddNewTrackActions.setImageFileMimeType(mimeType))

});
