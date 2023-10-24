import { useCallback, memo } from 'react'
import { useSelector } from 'react-redux';
import { FileInput } from '@/shared/ui/FileInput';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { useFile } from '@/entity/fileStorage';
import { getIsImageFileValidationError } from '../../../model/selectors/getIsImageFileValidationError';
import { getIsImageCroppedWideFileValidationError } from '../../../model/selectors/getIsImageCroppedWideFileValidationError';
import { getIsImageCroppedSquareFileValidationError } from '../../../model/selectors/getIsImageCroppedSquareFileValidationError';
import { setImageCroppedSquareFileMimeType } from '../../../model/services/setImageCroppedSquareFileMimeType';
import { setImageCroppedWideFileMimeType } from '../../../model/services/setImageCroppedWideFileMimeType';
import { setImageFileMimeType } from '../../../model/services/setImageFileMimeType';
import { getStatus } from '../../../model/selectors/getStatus';
import { FormDataEntries } from '../../../model/filesStorage/types';
import { FilesContext } from '../../../model/filesStorage/FilesContext';

interface IImageInputProps {
    className?: string
}

export const ImageInput: React.FunctionComponent<IImageInputProps> = memo(({
    className
}) => {

    const isImageError = useSelector(getIsImageFileValidationError)
    const isImageCroppedWideError = useSelector(getIsImageCroppedWideFileValidationError)
    const isImageCroppedSquareError = useSelector(getIsImageCroppedSquareFileValidationError)
    const status = useSelector(getStatus)

    const isError = isImageError || isImageCroppedWideError || isImageCroppedSquareError
    const dispatch = useAppDispatch()
    const {
        setFile: setImageFile,
        getFile: getImageFile,
        deleteFile: deleteImageFile
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
    } = useFile({
        formDataEntryName: FormDataEntries.IMAGE_CROPPED_WIDE_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setImageCroppedSquareFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setImageCroppedSquareFileMimeType(undefined))
    })

    const onChangeFileSuccess = useCallback((file: File) => {
        setImageFile(file)
        deleteImageCroppedWideFile()
        deleteImageCroppedSquareFile()
    }, [setImageFile, deleteImageCroppedWideFile, deleteImageCroppedSquareFile])

    const onChangeFileUndefined = useCallback(() => {
        deleteImageFile()
        deleteImageCroppedWideFile()
        deleteImageCroppedSquareFile()
    }, [deleteImageFile, deleteImageCroppedWideFile, deleteImageCroppedSquareFile])

    const imageFile = getImageFile() as File | undefined
    const imageFileName = imageFile?.name


    return (
        <FileInput
            label='Изображение'
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

ImageInput.displayName = 'ImageInput'