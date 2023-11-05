import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react'
import { getPassword } from '../selectors/getPassword';
import { getEmail } from '../selectors/getEmail';
import { redirect } from 'next/navigation';

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

//@ts-ignore
export const signInByEmail = createAsyncThunk<void, void>('signin/post', async (_, thunkApi) => {
    const { dispatch, rejectWithValue, getState } = thunkApi;

    // @ts-ignore
    const email = getEmail(getState())
    // @ts-ignore
    const password = getPassword(getState())

    try {
        await signIn('credentials', {
            email,
            password,
            redirect: false,
        })

        if (!window.navigator.onLine) {
            return toast('Ошибка. Нет соединения с интернетом')
        }

        redirect(new URLSearchParams(window.location.search).get('callbackUrl') ?? '/')

    } catch (e) {
        return rejectWithValue('Произошла неожиданная ошибка');
    }
});
