import { getSession } from 'next-auth/react'
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { backendUrl } from '@/shared/const/backendUrl';
import { getName } from '../selectors/getName';
import { getNameSecondary } from '../selectors/getNameSecondary';
import { getAudioFileMimeType } from '../selectors/getAudioFileMimeType';
import { getValidationError } from '../selectors/getValidationError';
import { AddNewTrackSeparateImageLoadingActions } from '../slices/AddNewTrackSeparateImageLoading';
import { getColor } from '../selectors/getColor';
import { getUploadCode } from '../selectors/getUploadCode';

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
    // @ts-ignore
    const color = getColor(getState())
    // @ts-ignore
    const upload_code = getUploadCode(getState())

    const session = await getSession()

    const viewerId = session?.user?.id
    const accessToken = session?.backendTokens?.accessToken


    dispatch(AddNewTrackSeparateImageLoadingActions.validateName(name))
    dispatch(AddNewTrackSeparateImageLoadingActions.validateUploadCode(upload_code))
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
    formData.append('upload_code', upload_code!)
    if (color) formData.append('color', color)
    formData.append('name_secondary', name_secondary || '')
    formData.append('audio', audioFile)
    formData.append('squarePicture', imageCroppedSquareFile)
    formData.append('widePicture', imageCroppedWideFile)
    formData.append('feats_ids', JSON.stringify([]))
    formData.append('owners_ids', JSON.stringify([]))

    try {
        await new Promise ((res, rej) => {
            dispatch(AddNewTrackSeparateImageLoadingActions.startLoad())
            const ajax = new XMLHttpRequest();

            ajax.upload.addEventListener('progress', (e: any) => {
                const percent = (e.loaded / e.total) * 100
                dispatch(AddNewTrackSeparateImageLoadingActions.setProgress(percent))
            }, false)


            ajax.addEventListener('load', () => {
                toast('Сохранено')
                dispatch(AddNewTrackSeparateImageLoadingActions.reset())
                deleteAllFiles()
                dispatch(AddNewTrackSeparateImageLoadingActions.setIdle())
                res(undefined)
            }, false)

            ajax.addEventListener('error', () => {
                rej()
            }, false)

            ajax.addEventListener('abort', () => {
                rej()
            }, false)

            ajax.open('POST', backendUrl + '/tracks-private/upload')
            ajax.setRequestHeader('Authorization', 'Bearer ' + accessToken)
            ajax.send(formData);            
        })
    } catch (error) {
        toast('Ошибка во время загрузки на сервер')
        dispatch(AddNewTrackSeparateImageLoadingActions.setIdle())
    }
});
