import { useCallback } from 'react'
import { CropImage } from '@/shared/ui/CropImage';
import { useFile } from '@/entity/fileStorage';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { FilesContext } from '../../../model/filesStorage/FilesContext';
import { FormDataEntries } from '../../../model/filesStorage/types';
import { setImageCroppedWideFileMimeType } from '../../../model/services/setImageCroppedWideFileMimeType';
import { setImageWideFileMimeType } from '../../../model/services/setImageWideFileMimeType';
import { AddNewTrackSeparateImageLoadingActions } from '../../../model/slices/AddNewTrackSeparateImageLoading';


export const CropWideImage: React.FunctionComponent = () => {

    const dispatch = useAppDispatch()
    const {
        deleteFile: deleteImageFile,
        getFile: getImageFile,
    } = useFile({
        formDataEntryName: FormDataEntries.IMAGE_WIDE_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setImageWideFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setImageWideFileMimeType(undefined))
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


    const image = getImageFile() as File | undefined

    const onCancel = useCallback(() => {
        deleteImageCroppedWideFile()
        deleteImageFile()
        dispatch(AddNewTrackSeparateImageLoadingActions.setTab('form'))
    }, [deleteImageCroppedWideFile, dispatch, deleteImageFile])


    const onSuccess = useCallback((file: File) => {
        setImageCroppedWideFile(file)
        dispatch(AddNewTrackSeparateImageLoadingActions.setTab('form'))
    }, [setImageCroppedWideFile, dispatch])


    return (
        <CropImage
            imageFileURL={image ? URL.createObjectURL(image) : undefined}
            onCancel={onCancel}
            onSuccess={onSuccess}
            aspectRatio={16/9}
            submitButtonText='Продолжить'
            cancelButtonText='Отменить'
            info='Обрежьте широкоэкранное изображение'
            minHeight={1080}
            minWidth={1920}
            title='Плеер'
            testId='crop-wide'
            continueButtonTestId='wide-continue'
        />
    );
};