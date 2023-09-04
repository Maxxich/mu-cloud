import { viewerActions } from '@/entity/viewer';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface SuccessResponse {
    adress: string,
    name: string,
    id: 0,
    email: {
      confirmed: true
    },
    picture_source: {
      small: string,
      medium: string,
      big: string
    },
    access_token: string,
    refresh_token: string
}

export const checkAuth = createAsyncThunk<void, void>('viewer/check-auth', async (_, thunkApi) => {
    const { dispatch, rejectWithValue, getState } = thunkApi;


    try {
        dispatch(viewerActions.setChecking(true));
        const response = await fetch('http://localhost:5001/auth-private/check-auth', {
            credentials: 'include'
        })

        //@ts-ignore
        const data = await response.json() as SuccessResponse

        dispatch(viewerActions.setCredentials({
            ...data,
            checking: false
        }));

        return 
    } catch (e) {
        dispatch(viewerActions.setChecking(false));
    }
});
