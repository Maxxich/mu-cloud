import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackActions } from '../slices/AddNewTrackSlice';

export const setName = createAsyncThunk('AddNewTrack/setName', async (name: string, thunkApi) => {
    const { dispatch } = thunkApi;

    if (name[0] === ' ') return
    if (name[name.length-1] === ' ') return

    dispatch(AddNewTrackActions.validateName(name))
    dispatch(AddNewTrackActions.setName(name))

});
