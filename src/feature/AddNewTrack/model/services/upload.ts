import { getSession } from 'next-auth/react'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getName } from '../selectors/getName';
import { getNameSecondary } from '../selectors/getNameSecondary';
import { getAudioFileMimeType } from '../selectors/getAudioFileMimeType';
import { getImageFileMimeType } from '../selectors/getImageFileMimeType';
import { AddNewTrackActions } from '../slices/AddNewTrackSlice';
import { getValidationError } from '../selectors/getValidationError';

interface Props {
    imageFile: FormDataEntryValue | null,
    audioFile: FormDataEntryValue | null,
    imageCroppedWideFile: FormDataEntryValue | null,
    imageCroppedSquareFile: FormDataEntryValue | null
} 

export const upload = createAsyncThunk('AddNewTrack/upload', async (
    { imageFile, audioFile, imageCroppedSquareFile, imageCroppedWideFile }: Props,
    thunkApi
) => {
    const { dispatch, getState } = thunkApi;

    // @ts-ignore
    const name = getName(getState())
    // @ts-ignore
    const name_secondary = getNameSecondary(getState())
    // @ts-ignore
    const audioFileMimeType = getAudioFileMimeType(getState())
    // @ts-ignore
    const imageFileMimeType = getImageFileMimeType(getState())

    const session = await getSession()

    const viewerId = session?.user.id
    const accessToken = session?.backendTokens.accessToken


    dispatch(AddNewTrackActions.validateName(name))
    dispatch(AddNewTrackActions.validateNameSecondary(name_secondary))
    dispatch(AddNewTrackActions.validateAudioFileMimeType(audioFileMimeType))
    dispatch(AddNewTrackActions.validateImageFileMimeType(imageFileMimeType))

    // @ts-ignore
    const error = getValidationError(getState())
    const audioFileError = !audioFile
    const imageFileError = !imageFile
    const imageCroppedWideFileError = !imageCroppedWideFile
    const imageCroppedSquareFileError = !imageCroppedSquareFile

    if (error) {
        return
    }

    if (!viewerId || !accessToken) {
        alert('Произошла неожиданная ошибка. Требуется авторизация')
        return
    }

    if (audioFileError) {
        alert('Произошла неожиданная ошибка при загрузке аудиофайла')
        return
    }

    if (imageFileError) {
        alert('Произошла неожиданная ошибка при загрузке изображения')
        return
    }

    if (imageCroppedWideFileError) {
        alert('Произошла неожиданная ошибка при кадрировании изображения')
        return
    }

    if (imageCroppedSquareFileError) {
        alert('Произошла неожиданная ошибка при кадрировании изображения')
        return
    }

    const formData = new FormData()
    formData.append('name', name!)
    formData.append('name_secondary', name_secondary || '')
    formData.append('audio', audioFile)
    formData.append('squarePicture', imageCroppedSquareFile)
    formData.append('widePicture', imageCroppedWideFile)
    formData.append('feats_ids', JSON.stringify([]))
    formData.append('owners_ids', JSON.stringify([]))
    // formData.append('color', color || '')
    try {
        const response = await fetch('http://localhost:5001/tracks-private/upload', {
            method: 'POST',
            body: formData,
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + accessToken
            },
        })

        if (response.status != 201) {
            // return rejectWithValue('Неверные данные для входа');
            return alert('Произошла ошибка во время загрузки на сервер')
        }

        alert('Трек успешно загружен!')
    } catch (error) {
        alert('Произошла ошибка во время загрузки на сервер')
    }
});
