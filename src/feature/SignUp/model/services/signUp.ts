import { signIn } from 'next-auth/react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeTrailingSpaces } from '@/shared/lib/helpers/removeTrailingSpaces/removeTrailingSpaces';
import { backendUrl } from '@/shared/const/backendUrl';
import { getPassword,getEmail, getName, getPasswordConfirm } from '../selectors/fieldSelectors';
import { getValidationError } from '../selectors/getValidationError';
import { signupActions } from '../slices/signupSlice';
import { redirect } from 'next/navigation';

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
        password, 
        email,
        name: removeTrailingSpaces(name!)
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
            try {
                const data = await response.json()
                if (typeof data.message !== 'object') {
                    throw Error()
                }
                if (data.message.includes('name must be longer than or equal to 4 characters')) {
                    return rejectWithValue('Минимальная длина имени 4 символа')
                }
                if (data.message.includes('Email exist')) {
                    return rejectWithValue('Пользователь с таким Email уже существует')
                }
                throw Error()
            } catch (error) {
                return rejectWithValue('Произошла неожиданная ошибка')
            }
        }

        await signIn('credentials', {
            email,
            password,
            redirect: false,
        })

        redirect(new URLSearchParams(window.location.search).get('callbackUrl') ?? '/')
    } catch (e) {
        return rejectWithValue('Произошла неожиданная ошибка');
    }
});
