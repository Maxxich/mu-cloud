import { useContext, useCallback } from 'react'
import { FilesContext } from '../config/FilesContext'
import { FormDataEntries } from '../config/types'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { setImageCroppedWideFileMimeType } from '../../services/setImageCroppedWideFileMimeType'


export const useImageCroppedWideFile = () => {
    const filesFormData = useContext(FilesContext)
    const dispatch = useAppDispatch()

    const setImageCroppedWideFile = useCallback((imageFile: File | undefined) => {
        if (imageFile) {
            filesFormData.set(FormDataEntries.IMAGE_CROPPED_WIDE_FILE, imageFile)
             dispatch(setImageCroppedWideFileMimeType(imageFile.type))
        } else {
            filesFormData.delete(FormDataEntries.IMAGE_CROPPED_WIDE_FILE)
             dispatch(setImageCroppedWideFileMimeType(undefined))
        }
    }, [filesFormData, dispatch])

    const getImageCroppedWideFile = useCallback(() => {
        return filesFormData.get(FormDataEntries.IMAGE_CROPPED_WIDE_FILE)
    }, [filesFormData]) 

    return { setImageCroppedWideFile, getImageCroppedWideFile }
}