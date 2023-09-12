import { createAsyncThunk } from '@reduxjs/toolkit';
import { viewerActions } from '@/entity/viewer';
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
        const response = await fetch('http://localhost:5001/auth/signup', {
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
        const data = await response.json() as SuccessResponse

        dispatch(viewerActions.setCredentials({
            ...data,
            checking: false
        }));

        return 
    } catch (e) {
        return rejectWithValue('Произошла неожиданная ошибка');
    }
});
