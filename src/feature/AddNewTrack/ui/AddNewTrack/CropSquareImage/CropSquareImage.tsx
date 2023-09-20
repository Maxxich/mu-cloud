import { useCallback } from 'react'
import { CropImage } from '@/shared/ui/CropImage';
import { useFile } from '@/entity/fileStorage';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { setImageCroppedWideFileMimeType } from '../../..//model/services/setImageCroppedWideFileMimeType';
import { AddNewTrackActions } from '../../../model/slices/AddNewTrackSlice';
import { FilesContext } from '../../../model/filesStorage/FilesContext';
import { setImageFileMimeType } from '../../..//model/services/setImageFileMimeType';
import { FormDataEntries } from '../../../model/filesStorage/types';
import { setImageCroppedSquareFileMimeType } from '../../..//model/services/setImageCroppedSquareFileMimeType';


export const CropSquareImage: React.FunctionComponent = () => {

    const dispatch = useAppDispatch()
    const {
        deleteFile: deleteImageFile,
        getFile: getImageFile,
    } = useFile({
        formDataEntryName: FormDataEntries.IMAGE_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setImageFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setImageFileMimeType(undefined))
    })

    const {
        deleteFile: deleteImageCroppedWideFile,
    } = useFile({
        formDataEntryName: FormDataEntries.IMAGE_CROPPED_WIDE_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setImageCroppedWideFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setImageCroppedWideFileMimeType(undefined))
    })

    const {
        deleteFile: deleteImageCroppedSquareFile,
        setFile: setImageCroppedSquareFile
    } = useFile({
        formDataEntryName: FormDataEntries.IMAGE_CROPPED_SQUARE_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setImageCroppedSquareFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setImageCroppedSquareFileMimeType(undefined))
    })

    const image = getImageFile() as File | undefined

    const onCancel = useCallback(() => {
        deleteImageCroppedSquareFile()
        deleteImageFile()
        deleteImageCroppedWideFile()
        dispatch(AddNewTrackActions.setTab('form'))
    }, [deleteImageCroppedWideFile, dispatch, deleteImageCroppedSquareFile, deleteImageFile])


    const onSuccess = useCallback((file: File) => {
        setImageCroppedSquareFile(file)
        dispatch(AddNewTrackActions.setTab('form'))
    }, [setImageCroppedSquareFile, dispatch])


    return (
        <CropImage
            imageFileURL={image ? URL.createObjectURL(image) : undefined}
            onCancel={onCancel}
            onSuccess={onSuccess}
            aspectRatio={1}
            submitButtonText='Продолжить'
            cancelButtonText='Отменить'
            info='Обрежьте изображение для миниатюры'
            minHeight={700}
            minWidth={700}
            title='Миниатюра'
            testId='crop-square'
            continueButtonTestId='square-continue'
        />
    );
};