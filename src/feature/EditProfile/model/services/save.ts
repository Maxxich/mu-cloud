import { getSession } from 'next-auth/react'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { backendUrl } from '@/shared/const/backendUrl';
import { getName } from '../selectors/getName';
import { getValidationError } from '../selectors/getValidationError';
import { getAdress } from '../selectors/getAdress';
import { EditProfileActions } from '../slices/EditProfileSlice';
import { getInitialName } from '../selectors/getInitialName';
import { getInitialAdress } from '../selectors/getInitialAdress';


interface Props {
    croppedAvatar: FormDataEntryValue | null
} 

export const save = createAsyncThunk('EditProfile/save', async (
    { croppedAvatar }: Props,
    thunkApi
) => {
    const { dispatch, getState } = thunkApi;
    dispatch(EditProfileActions.startLoad())

    // @ts-ignore
    const name = getName(getState())
    // @ts-ignore
    const initialName = getInitialName(getState())
    // @ts-ignore
    const adress = getAdress(getState())
    // @ts-ignore
    const initialAdress = getInitialAdress(getState())

    const session = await getSession()
    const accessToken = session?.backendTokens.accessToken


    dispatch(EditProfileActions.validateName())
    dispatch(EditProfileActions.validateAdress())

    // @ts-ignore
    const error = getValidationError(getState())

    if (error) {
        return
    }

    if (!accessToken) {
        alert('Произошла неожиданная ошибка. Требуется авторизация')
        return
    }

    const formData = new FormData()
    if (name && (name !== initialName)) {
        formData.append('name', name)
    }
    if (adress && (adress !== initialAdress)) {
        formData.append('adress', adress)
    }
    if (croppedAvatar) {
        formData.append('picture', croppedAvatar)
    }
    try {
        const response = await fetch(backendUrl + '/user-private/edit-profile', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
        })

        if (response.status != 201) {
            if (response.status === 400) {
                const data = await response.json()
                if (data.message === 'Adress already exist') {
                    dispatch(EditProfileActions.setRequestError('Такой адрес уже занят'))
                } else if (data.message === 'Name already exist') {
                    dispatch(EditProfileActions.setRequestError('Такое имя уже занято'))
                }
            }
            dispatch(EditProfileActions.startEdit())
            return
        }
        dispatch(EditProfileActions.setSaved())
    } catch (error) {
        dispatch(EditProfileActions.setRequestError('Произошла неожиданная ошибка'))
        dispatch(EditProfileActions.startEdit())
    }
});
