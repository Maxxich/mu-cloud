import { useContext, useCallback } from 'react'
import { FilesContext } from '../config/FilesContext'
import { FormDataEntries } from '../config/types'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { setImageFileMimeType } from '../../services/setImageFileMimeType'

export const useImageFile = () => {
    const filesFormData = useContext(FilesContext)
    const dispatch = useAppDispatch()

    const setImageFile = useCallback((imageFile: File | undefined) => {
        if (imageFile) {
            filesFormData.set(FormDataEntries.IMAGE_FILE, imageFile)
             dispatch(setImageFileMimeType(imageFile.type))
        } else {
            filesFormData.delete(FormDataEntries.IMAGE_FILE)
             dispatch(setImageFileMimeType(undefined))
        }
    }, [filesFormData, dispatch])

    const getImageFile = useCallback(() => {
        return filesFormData.get(FormDataEntries.IMAGE_FILE)
    }, [filesFormData]) 

    return { setImageFile, getImageFile }
}