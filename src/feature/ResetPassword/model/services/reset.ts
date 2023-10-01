import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { backendUrl } from '@/shared/const/backendUrl';
import { getEmail } from '../selectors/getEmail';
import { ResetPasswordActions } from '../slices/ResetPasswordSlice';

//@ts-ignore
export const reset = createAsyncThunk<void, void>('ResetPassword/reset', async (_, thunkApi) => {
    const { dispatch, rejectWithValue, getState } = thunkApi;

    // @ts-ignore
    const email = getEmail(getState())

    try {
        dispatch(ResetPasswordActions.setStatus('loading'))
        const response = await fetch(
            backendUrl + '/auth/reset/link?email=' + email
        )

        if (!window.navigator.onLine) {
            dispatch(ResetPasswordActions.setStatus('idle'))
            return toast('Ошибка. Нет соединения с интернетом')
        }

        if (response.status === 200) {
            toast('Ссылка для сброса пароля отправлена на ваш Email')
            dispatch(ResetPasswordActions.setStatus('idle'))
            return 
        }

        throw Error()

    } catch (e) {
        dispatch(ResetPasswordActions.setStatus('idle'))
        return toast('Произошла неожиданная ошибка');
    }
});
