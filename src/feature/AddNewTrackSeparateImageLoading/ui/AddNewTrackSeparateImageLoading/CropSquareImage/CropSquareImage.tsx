import { useCallback } from 'react'
import { CropImage } from '@/shared/ui/CropImage';
import { useFile } from '@/entity/fileStorage';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { FilesContext } from '../../../model/filesStorage/FilesContext';
import { FormDataEntries } from '../../../model/filesStorage/types';
import { setImageCroppedSquareFileMimeType } from '../../../model/services/setImageCroppedSquareFileMimeType';
import { setImageSquareFileMimeType } from '../../../model/services/setImageSquareFileMimeType';
import { AddNewTrackSeparateImageLoadingActions } from '../../../model/slices/AddNewTrackSeparateImageLoading';


export const CropSquareImage: React.FunctionComponent = () => {

    const dispatch = useAppDispatch()
    const {
        deleteFile: deleteImageFile,
        getFile: getImageFile,
    } = useFile({
        formDataEntryName: FormDataEntries.IMAGE_SQUARE_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setImageSquareFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setImageSquareFileMimeType(undefined))
    })

    const {
        deleteFile: deleteImageCroppedSquareFile,
        setFile: setImageCroppedSquareFile,
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
        dispatch(AddNewTrackSeparateImageLoadingActions.setTab('form'))
    }, [deleteImageCroppedSquareFile, dispatch, deleteImageFile])


    const onSuccess = useCallback((file: File) => {
        setImageCroppedSquareFile(file)
        dispatch(AddNewTrackSeparateImageLoadingActions.setTab('form'))
    }, [setImageCroppedSquareFile, dispatch])


    return (
        <CropImage
            imageFileURL={image ? URL.createObjectURL(image) : undefined}
            onCancel={onCancel}
            onSuccess={onSuccess}
            aspectRatio={1}
            submitButtonText='Продолжить'
            cancelButtonText='Отменить'
            info='Обрежьте квадратное изображение'
            minHeight={900}
            minWidth={900}
            title='Плеер'
            testId='crop-wide'
            continueButtonTestId='wide-continue'
        />
    );
};