import { viewerActions } from '@/entity/viewer';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getName } from '../selectors/getName';
import { getNameSecondary } from '../selectors/getNameSecondary';
import { getAudioFileMimeType } from '../selectors/getAudioFileMimeType';
import { getImageFileMimeType } from '../selectors/getImageFileMimeType';
import { AddNewTrackActions } from '../slices/AddNewTrackSlice';
import { getValidationError } from '../selectors/getValidationError';

interface Props {
    imageFile: FormDataEntryValue | null,
    audioFile: FormDataEntryValue | null
} 

export const upload = createAsyncThunk('AddNewTrack/upload', async (
    { imageFile, audioFile }: Props,
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

    dispatch(AddNewTrackActions.validateName(name))
    dispatch(AddNewTrackActions.validateNameSecondary(name_secondary))
    dispatch(AddNewTrackActions.validateAudioFileMimeType(audioFileMimeType))
    dispatch(AddNewTrackActions.validateImageFileMimeType(imageFileMimeType))

    // @ts-ignore
    const error = getValidationError(getState())
    const audioFileError = !audioFile
    const imageFileError = !imageFile

    
    if (error) {
        alert('error')
    } else {
        alert('success')
        if (audioFileError) {
            alert('Произошла неожиданная ошибка при загрузке аудиофайла')
            return
        }
    
        if (imageFileError) {
            alert('Произошла неожиданная ошибка при загрузке изображения')
            return
        }
    }


});
