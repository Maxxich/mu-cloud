import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackSeparateImageLoadingActions } from '../slices/AddNewTrackSeparateImageLoading';

export const setNameSecondary = createAsyncThunk('AddNewTrackSeparateImageLoading/setNameSecondary', async (name_secondary: string, thunkApi) => {
    const { dispatch } = thunkApi;

    if (name_secondary[0] === ' ') return
    if (name_secondary[name_secondary.length-1] === ' ') return

    dispatch(AddNewTrackSeparateImageLoadingActions.validateNameSecondary(name_secondary))
    dispatch(AddNewTrackSeparateImageLoadingActions.setNameSecondary(name_secondary))

});
