import { useCallback, memo } from 'react'
import { useSelector } from 'react-redux';
import { FileInput } from '@/shared/ui/FileInput';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { useFile } from '@/entity/fileStorage';
import { getIsImageWideFileValidationError } from '../../../model/selectors/getIsImageWideFileValidationError';
import { getIsImageCroppedWideFileValidationError } from '../../../model/selectors/getIsImageCroppedWideFileValidationError';
import { setImageCroppedWideFileMimeType } from '../../../model/services/setImageCroppedWideFileMimeType';
import { setImageWideFileMimeType } from '../../../model/services/setImageWideFileMimeType';
import { getStatus } from '../../../model/selectors/getStatus';
import { FormDataEntries } from '../../../model/filesStorage/types';
import { FilesContext } from '../../../model/filesStorage/FilesContext';

interface IImageInputProps {
    className?: string
}

export const ImageWideInput: React.FunctionComponent<IImageInputProps> = memo(({
    className
}) => {

    const isImageWideError = useSelector(getIsImageWideFileValidationError)
    const isImageCroppedWideError = useSelector(getIsImageCroppedWideFileValidationError)
    const status = useSelector(getStatus)

    const isError = isImageWideError || isImageCroppedWideError
    const dispatch = useAppDispatch()
    const {
        setFile: setImageFile,
        getFile: getImageFile,
        deleteFile: deleteImageFile
    } = useFile({
        formDataEntryName: FormDataEntries.IMAGE_WIDE_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setImageWideFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setImageWideFileMimeType(undefined))
    })

    const {
        deleteFile: deleteImageCroppedWideFile,
    } = useFile({
        formDataEntryName: FormDataEntries.IMAGE_CROPPED_WIDE_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setImageCroppedWideFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setImageCroppedWideFileMimeType(undefined))
    })

    const onChangeFileSuccess = useCallback((file: File) => {
        setImageFile(file)
        deleteImageCroppedWideFile()
    }, [setImageFile, deleteImageCroppedWideFile])

    const onChangeFileUndefined = useCallback(() => {
        deleteImageFile()
        deleteImageCroppedWideFile()
    }, [deleteImageFile, deleteImageCroppedWideFile])

    const imageFile = getImageFile() as File | undefined
    const imageFileName = imageFile?.name


    return (
        <FileInput
            label='Широкоэкарнное изображение'
            onChangeFileSuccess={onChangeFileSuccess}
            onChangeFileUndefined={onChangeFileUndefined}
            placeholder='Выбрать изображение...'
            initialFileName={imageFileName}
            disabled={status === 'loading'}
            isError={isError}
            className={className}
            data-testid={'image-input-button'}
            inputTestId={'input'}
        />
    );
})

ImageWideInput.displayName = 'ImageWideInput'