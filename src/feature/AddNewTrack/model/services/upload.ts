import { getSession } from 'next-auth/react'
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { backendUrl } from '@/shared/const/backendUrl';
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
    imageCroppedSquareFile: FormDataEntryValue | null,
    deleteAllFiles: () => void
} 

export const upload = createAsyncThunk('AddNewTrack/upload', async (
    { imageFile, audioFile, imageCroppedSquareFile, imageCroppedWideFile, deleteAllFiles }: Props,
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

    const viewerId = session?.user?.id
    const accessToken = session?.backendTokens?.accessToken


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

    if (imageFileError) {
        return toast('Ошибка при загрузке изображения')
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
        dispatch(AddNewTrackActions.startLoad())
        const response = await fetch(backendUrl + '/tracks-private/upload', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
        })

        if (response.status != 201) {
            dispatch(AddNewTrackActions.setIdle())
            return toast('Ошибка во время загрузки на сервер')

        }

        toast('Сохранено')
        dispatch(AddNewTrackActions.reset())
        deleteAllFiles()
        dispatch(AddNewTrackActions.setIdle())
    } catch (error) {
        toast('Ошибка во время загрузки на сервер')
        dispatch(AddNewTrackActions.setIdle())
    }
});
