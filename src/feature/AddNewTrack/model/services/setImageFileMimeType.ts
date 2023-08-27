import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackActions } from '../slices/AddNewTrackSlice';
import { getIsImageFileValidationError } from '../selectors/getIsImageFileValidationError';

export const setImageFileMimeType = createAsyncThunk('AddNewTrack/setImageFileMimeType', async (mimeType: string | undefined, thunkApi) => {
    const { dispatch, getState } = thunkApi;

    dispatch(AddNewTrackActions.validateImageFileMimeType(mimeType))
    dispatch(AddNewTrackActions.setImageFileMimeType(mimeType))

    // @ts-ignore
    const error = getIsImageFileValidationError(getState())
    if (!error) {
        dispatch(AddNewTrackActions.setTab('cropWideImage'))
    }
});
