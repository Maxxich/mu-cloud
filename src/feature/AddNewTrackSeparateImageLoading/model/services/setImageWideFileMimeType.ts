import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackSeparateImageLoadingActions } from '../slices/AddNewTrackSeparateImageLoading';
import { getIsImageWideFileValidationError } from '../selectors/getIsImageWideFileValidationError';

export const setImageWideFileMimeType = createAsyncThunk('AddNewTrackSeparateImageLoading/setImageWideFileMimeType', async (mimeType: string | undefined, thunkApi) => {
    const { dispatch, getState } = thunkApi;

    dispatch(AddNewTrackSeparateImageLoadingActions.validateImageWideFileMimeType(mimeType))
    dispatch(AddNewTrackSeparateImageLoadingActions.setImageWideFileMimeType(mimeType))

    // @ts-ignore
    const error = getIsImageWideFileValidationError(getState())
    if (!error) {
        dispatch(AddNewTrackSeparateImageLoadingActions.setTab('cropWideImage'))
    }
});
