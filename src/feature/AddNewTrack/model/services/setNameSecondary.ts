import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackActions } from '../slices/AddNewTrackSlice';

export const setNameSecondary = createAsyncThunk('AddNewTrack/setNameSecondary', async (name_secondary: string, thunkApi) => {
    const { dispatch } = thunkApi;

    if (name_secondary[0] === ' ') return
    if (name_secondary[name_secondary.length-1] === ' ') return

    dispatch(AddNewTrackActions.validateNameSecondary(name_secondary))
    dispatch(AddNewTrackActions.setNameSecondary(name_secondary))

});
