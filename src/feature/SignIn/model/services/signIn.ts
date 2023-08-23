import { viewerActions } from '@/entity/viewer';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPassword } from '../selectors/getPassword';
import { getEmail } from '../selectors/getEmail';

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

export const signInByEmail = createAsyncThunk('signin/post', async (_, thunkApi) => {
    const { dispatch, rejectWithValue, getState } = thunkApi;

    // @ts-ignore
    const email = getEmail(getState())
    // @ts-ignore
    const password = getPassword(getState())

 
    const body = {
        password, email
    }

    try {
        const response = await fetch('http://localhost:5001/auth/signin', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',

              },
        })


        if (response.status == 400) {
            return rejectWithValue('Неверные данные для входа');
        }
        
        if (response.status !== 200) {
            return rejectWithValue('Сервер недоступен')
        }


        
        //@ts-ignore
        const data = await response.json() as SuccessResponse

        alert(data.access_token)

        dispatch(viewerActions.setCredentials({
            ...data,
            checking: false
        }));

        return
    } catch (e) {
        return rejectWithValue('Произошла неожиданная ошибка');
    }
});
