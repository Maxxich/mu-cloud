import { viewerActions } from '@/entity/viewer';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPassword } from '../selectors/getPassword';
import { getEmail } from '../selectors/getEmail';
import { signIn } from 'next-auth/react'

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

export const signInByEmail = createAsyncThunk<void, void>('signin/post', async (_, thunkApi) => {
    const { dispatch, rejectWithValue, getState } = thunkApi;

    // @ts-ignore
    const email = getEmail(getState())
    // @ts-ignore
    const password = getPassword(getState())

 
    const body = {
        password, email
    }

    try {
        alert(new URLSearchParams(window.location.search).get('callbackUrl'))
        alert(new URL(location.href).searchParams.get('callbackUrl'))
        const response = await signIn('credentials', {
            email,
            password,
            redirect: false,
            callbackUrl: new URL(location.href).searchParams.get('callbackUrl') ?? undefined
        })


        if (!response) {
            return rejectWithValue('Сервер недоступен')
        }

        if (response.status == 400) {
            return rejectWithValue('Неверные данные для входа');
        }
        
        if (!response.ok) {
            return rejectWithValue('Сервер недоступен')
        }

        //@ts-ignore
        // const data = await response.json() as SuccessResponse

        // dispatch(viewerActions.setCredentials({
        //     ...data,
        //     checking: false
        // }));

        return 
    } catch (e) {
        return rejectWithValue('Произошла неожиданная ошибка');
    }
});
