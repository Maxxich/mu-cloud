import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackSeparateImageLoadingActions } from '../slices/AddNewTrackSeparateImageLoading';

export const setName = createAsyncThunk('AddNewTrackSeparateImageLoading/setName', async (name: string, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(AddNewTrackSeparateImageLoadingActions.validateName(name))
    dispatch(AddNewTrackSeparateImageLoadingActions.setName(name))

});
