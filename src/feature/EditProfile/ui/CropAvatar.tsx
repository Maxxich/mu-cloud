import { useCallback } from 'react'
import { CropImage } from '@/shared/ui/CropImage';
import { useFile } from '@/entity/fileStorage';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { FormDataEntries } from '../model/fileStorage/types';
import { FilesContext } from '../model/fileStorage/FilesContext';
import { EditProfileActions } from '../model/slices/EditProfileSlice';

export const CropAvatar: React.FunctionComponent = () => {

    const dispatch = useAppDispatch()
    const {
        deleteFile: deleteUploaded,
        getFile: getUploaded,
    } = useFile({
        formDataEntryName: FormDataEntries.UPLOADED,
        context: FilesContext,
        onDeleteFile: () => dispatch(EditProfileActions.removeUploadedAvatar())
    })

    const {
        setFile: setCropped
    } = useFile({
        formDataEntryName: FormDataEntries.CROPPED,
        context: FilesContext,
        onSetFile: () => dispatch(EditProfileActions.setAvatarCroppedExist()),
    })



    const image = getUploaded() as File | undefined

    const onCancel = useCallback(() => {
        deleteUploaded()
    }, [deleteUploaded])


    const onSuccess = useCallback((file: File) => {
        setCropped(file)
    }, [setCropped])


    return (
        <CropImage
            imageFileURL={image ? URL.createObjectURL(image) : undefined}
            onCancel={onCancel}
            onSuccess={onSuccess}
            aspectRatio={1}
            submitButtonText='Продолжить'
            cancelButtonText='Отменить'
            info='Обрежьте изображение для миниатюры'
            minHeight={1000}
            minWidth={1000}
            title='Миниатюра'
            testId='crop-square'
            continueButtonTestId='square-continue'
        />
    );
};