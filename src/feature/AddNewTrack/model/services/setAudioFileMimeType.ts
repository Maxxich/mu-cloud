import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackActions } from '../slices/AddNewTrackSlice';

export const setAudioFileMimeType = createAsyncThunk('AddNewTrack/setAudioFileMimeType', async (mimeType: string | undefined, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(AddNewTrackActions.validateAudioFileMimeType(mimeType))
    dispatch(AddNewTrackActions.setAudioFileMimeType(mimeType))

});
