import { useCallback } from 'react'
import { CropImage } from '@/shared/ui/CropImage';
import { useFile } from '@/entity/fileStorage';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { AddNewTrackActions } from '../../../model/slices/AddNewTrackSlice';
import { FilesContext } from '../../../model/filesStorage/FilesContext';
import { FormDataEntries } from '../../../model/filesStorage/types';
import { setImageFileMimeType } from '../../../model/services/setImageFileMimeType';
import { setImageCroppedWideFileMimeType } from '../../../model/services/setImageCroppedWideFileMimeType';
import { setImageCroppedSquareFileMimeType } from '../../../model/services/setImageCroppedSquareFileMimeType';


export const CropWideImage: React.FunctionComponent = () => {

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
        setFile: setImageCroppedWideFile,
    } = useFile({
        formDataEntryName: FormDataEntries.IMAGE_CROPPED_WIDE_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setImageCroppedWideFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setImageCroppedWideFileMimeType(undefined))
    })

    const {
        deleteFile: deleteImageCroppedSquareFile,
    } = useFile({
        formDataEntryName: FormDataEntries.IMAGE_CROPPED_WIDE_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setImageCroppedSquareFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setImageCroppedSquareFileMimeType(undefined))
    })


    const image = getImageFile() as File | undefined

    const onCancel = useCallback(() => {
        deleteImageCroppedWideFile()
        deleteImageFile()
        deleteImageCroppedSquareFile()
        dispatch(AddNewTrackActions.setTab('form'))
    }, [deleteImageCroppedWideFile, dispatch, deleteImageCroppedSquareFile, deleteImageFile])


    const onSuccess = useCallback((file: File) => {
        setImageCroppedWideFile(file)
        dispatch(AddNewTrackActions.setTab('cropSquareImage'))
    }, [setImageCroppedWideFile, dispatch])


    return (
        <CropImage
            imageFileURL={image ? URL.createObjectURL(image) : undefined}
            onCancel={onCancel}
            onSuccess={onSuccess}
            aspectRatio={16/9}
            submitButtonText='Продолжить'
            cancelButtonText='Отменить'
            info='Обрежьте изображение для плеера'
            minHeight={1080}
            minWidth={1920}
            title='Плеер'
            testId='crop-wide'
            continueButtonTestId='wide-continue'
        />
    );
};