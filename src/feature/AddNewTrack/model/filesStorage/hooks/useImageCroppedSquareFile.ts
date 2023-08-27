import { useContext, useCallback } from 'react'
import { FilesContext } from '../config/FilesContext'
import { FormDataEntries } from '../config/types'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { setImageCroppedSquareFileMimeType } from '../../services/setImageCroppedSquareFileMimeType'

export const useImageCroppedSquareFile = () => {
    const filesFormData = useContext(FilesContext)
    const dispatch = useAppDispatch()

    const setImageCroppedSquareFile = useCallback((imageFile: File | undefined) => {
        if (imageFile) {
            filesFormData.set(FormDataEntries.IMAGE_CROPPED_WIDE_FILE, imageFile)
             dispatch(setImageCroppedSquareFileMimeType(imageFile.type))
        } else {
            filesFormData.delete(FormDataEntries.IMAGE_CROPPED_WIDE_FILE)
             dispatch(setImageCroppedSquareFileMimeType(undefined))
        }
    }, [filesFormData, dispatch])

    const getImageCroppedSquareFile = useCallback(() => {
        return filesFormData.get(FormDataEntries.IMAGE_CROPPED_WIDE_FILE)
    }, [filesFormData]) 

    return { setImageCroppedSquareFile, getImageCroppedSquareFile }
}