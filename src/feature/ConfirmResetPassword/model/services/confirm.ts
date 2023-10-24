import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { backendUrl } from '@/shared/const/backendUrl';
import { confirmResetPasswordActions } from '../slices/ConfirmResetPasswordSlice';
import { getPassword, getPasswordConfirm } from '../selectors/fieldSelectors';
import { getValidationError } from '../selectors/getValidationError';


export const confirm = createAsyncThunk('confirmResetPassword/confirm', async (_, thunkApi) => {
    const { dispatch, rejectWithValue, getState } = thunkApi;

    // @ts-ignore
    const password = getPassword(getState())
    // @ts-ignore
    const passwordConfirm = getPasswordConfirm(getState())
    

    dispatch(confirmResetPasswordActions.validatePassword(password))
    dispatch(confirmResetPasswordActions.validatePasswordConfirm(passwordConfirm))
    // @ts-ignore
    const error = getValidationError(getState())
    if (error) {
        return
    }

    const body = {
        newPassword: password,
        token: new URLSearchParams(location.search).get('token') 
    }

    try {
        if (!window.navigator.onLine) {
            return toast('Ошибка. Нет соединения с интернетом')
        }

        const response = await fetch(backendUrl + '/auth/reset', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        
        if (response.status === 500) {
            return rejectWithValue('Сервер недоступен')
        }

        if (response.status === 400) {
            return rejectWithValue('Ссылка устарела')
        }

        if (response.status === 201) {
            toast('Сохранено')
            return
        }
        throw Error()
    } catch (e) {
        return rejectWithValue('Произошла неожиданная ошибка');
    }
});
