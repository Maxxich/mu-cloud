import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewTrackSeparateImageLoadingActions } from '../slices/AddNewTrackSeparateImageLoading';
import { getIsImageSquareFileValidationError } from '../selectors/getIsImageSquareFileValidationError';

export const setImageSquareFileMimeType = createAsyncThunk('AddNewTrackSeparateImageLoading/setImageSqaureFileMimeType', async (mimeType: string | undefined, thunkApi) => {
    const { dispatch, getState } = thunkApi;

    dispatch(AddNewTrackSeparateImageLoadingActions.validateImageSquareFileMimeType(mimeType))
    dispatch(AddNewTrackSeparateImageLoadingActions.setImageSquareFileMimeType(mimeType))

    // @ts-ignore
    const error = getIsImageSquareFileValidationError(getState())
    if (!error) {
        dispatch(AddNewTrackSeparateImageLoadingActions.setTab('cropSquareImage'))
    }
});
