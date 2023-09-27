import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn } from 'next-auth/react';
import { backendUrl } from '@/shared/const/backendUrl';
import { getPassword,getEmail, getName, getPasswordConfirm } from '../selectors/fieldSelectors';
import { getValidationError } from '../selectors/getValidationError';
import { signupActions } from '../slices/signupSlice';

interface SuccessResponse {
    adress: string,
    name: string,
    id: number,
    email: {
      confirmed: boolean
    },
    picture_source: {
      small: string,
      medium: string,
      big: string
    },
    access_token: string,
    refresh_token: string
}

export const signUpByEmail = createAsyncThunk<void, void>('signup/post', async (_, thunkApi) => {
    const { dispatch, rejectWithValue, getState } = thunkApi;

    // @ts-ignore
    const email = getEmail(getState())
    // @ts-ignore
    const password = getPassword(getState())
    // @ts-ignore
    const passwordConfirm = getPasswordConfirm(getState())
    // @ts-ignore
    const name = getName(getState())

    dispatch(signupActions.validateEmail(email))
    dispatch(signupActions.validateEmailOnSubmit(email))
    dispatch(signupActions.validateName(name))
    dispatch(signupActions.validatePassword(password))
    dispatch(signupActions.validatePasswordConfirm(passwordConfirm))

    // @ts-ignore
    const error = getValidationError(getState())

    if (error) {
        return
    }
 
    const body = {
        password, email, name
    }

    try {
        const response = await fetch(backendUrl + '/auth/signup', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
        
        if (response.status === 500) {
            return rejectWithValue('Сервер недоступен')
        }

        if (response.status !== 201) {
            return rejectWithValue('Произошла неожиданная ошибка')
        }

        //@ts-ignore
        const signInResponse = await signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: new URL(location.href).searchParams.get('callbackUrl') ?? '/',
            // callbackUrl: '/profile'
        })


        if (!signInResponse) {
            alert('1')
            return rejectWithValue('Сервер недоступен')
        }

        if (signInResponse.status == 400) {
            alert('2')
            return rejectWithValue('Неверные данные для входа');
        }
        
        if (!signInResponse.ok) {
            alert('3')
            return rejectWithValue('Сервер недоступен')
        }

        return 
    } catch (e) {
        alert('4')
        return rejectWithValue('Произошла неожиданная ошибка');
    }
});
