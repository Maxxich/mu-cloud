import { useContext, useCallback } from 'react'
import { FilesContext } from '../config/FilesContext'
import { FormDataEntries } from '../config/types'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { setAudioFileMimeType } from '../../services/setAudioFileMimeType'

export const useAudioFile = ()  => {
    const filesFormData = useContext(FilesContext)
    const dispatch = useAppDispatch()

    const setAudioFile = useCallback((audioFile: File | undefined) => {
        if (audioFile) {
            filesFormData.set(FormDataEntries.AUDIO_FILE, audioFile)
            dispatch(setAudioFileMimeType(audioFile.type))
        } else {
            filesFormData.delete(FormDataEntries.AUDIO_FILE)
            dispatch(setAudioFileMimeType(undefined))
        }
    }, [filesFormData, dispatch])

    const getAudioFile = useCallback(() => {
        return filesFormData.get(FormDataEntries.AUDIO_FILE)
    }, [filesFormData]) 

    return { setAudioFile, getAudioFile}
}