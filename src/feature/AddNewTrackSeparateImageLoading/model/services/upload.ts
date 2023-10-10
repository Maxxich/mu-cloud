import { getSession } from 'next-auth/react'
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getName } from '../selectors/getName';
import { getNameSecondary } from '../selectors/getNameSecondary';
import { getAudioFileMimeType } from '../selectors/getAudioFileMimeType';
import { getValidationError } from '../selectors/getValidationError';
import { AddNewTrackSeparateImageLoadingActions } from '../slices/AddNewTrackSeparateImageLoading';

interface Props {
    audioFile: FormDataEntryValue | null,
    imageCroppedWideFile: FormDataEntryValue | null,
    imageCroppedSquareFile: FormDataEntryValue | null,
    deleteAllFiles: () => void
} 

export const upload = createAsyncThunk('AddNewTrackSeparateImageLoading/upload', async (
    { audioFile, imageCroppedSquareFile, imageCroppedWideFile, deleteAllFiles }: Props,
    thunkApi
) => {
    const { dispatch, getState } = thunkApi;

    // @ts-ignore
    const name = getName(getState())
    // @ts-ignore
    const name_secondary = getNameSecondary(getState())
    // @ts-ignore
    const audioFileMimeType = getAudioFileMimeType(getState())

    const session = await getSession()

    const viewerId = session?.user?.id
    const accessToken = session?.backendTokens?.accessToken


    dispatch(AddNewTrackSeparateImageLoadingActions.validateName(name))
    dispatch(AddNewTrackSeparateImageLoadingActions.validateNameSecondary(name_secondary))
    dispatch(AddNewTrackSeparateImageLoadingActions.validateAudioFileMimeType(audioFileMimeType))

    // @ts-ignore
    const error = getValidationError(getState())
    const audioFileError = !audioFile
    const imageCroppedWideFileError = !imageCroppedWideFile
    const imageCroppedSquareFileError = !imageCroppedSquareFile

    if (error) {
        return toast('Ошибка')
    }

    if (!window.navigator.onLine) {
        return toast('Ошибка. Нет соединения с интернетом')
    }

    if (!viewerId || !accessToken) {
        return toast('Ошибка. Требуется авторизация')
    }

    if (audioFileError) {
        return toast('Ошибка при загрузке аудиофайла')
    }

    if (imageCroppedWideFileError) {
        return toast('Ошибка при кадрировании изображения')
    }

    if (imageCroppedSquareFileError) {
        return toast('Ошибка при кадрировании изображения')
    }

    const formData = new FormData()
    formData.append('name', name!)
    formData.append('name_secondary', name_secondary || '')
    formData.append('audio', audioFile)
    formData.append('squarePicture', imageCroppedSquareFile)
    formData.append('widePicture', imageCroppedWideFile)
    formData.append('feats_ids', JSON.stringify([]))
    formData.append('owners_ids', JSON.stringify([]))
    try {
        dispatch(AddNewTrackSeparateImageLoadingActions.startLoad())
        const response = await fetch('http://localhost:5001/tracks-private/upload', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
        })

        if (response.status != 201) {
            dispatch(AddNewTrackSeparateImageLoadingActions.setIdle())
            return toast('Ошибка во время загрузки на сервер')

        }

        toast('Сохранено')
        dispatch(AddNewTrackSeparateImageLoadingActions.reset())
        deleteAllFiles()
        dispatch(AddNewTrackSeparateImageLoadingActions.setIdle())
    } catch (error) {
        toast('Ошибка во время загрузки на сервер')
        dispatch(AddNewTrackSeparateImageLoadingActions.setIdle())
    }
});