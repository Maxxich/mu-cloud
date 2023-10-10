import { useCallback, memo } from 'react'
import { useSelector } from 'react-redux';
import { FileInput } from '@/shared/ui/FileInput';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { useFile } from '@/entity/fileStorage';
import { getIsImageSquareFileValidationError } from '../../../model/selectors/getIsImageSquareFileValidationError';
import { getIsImageCroppedSquareFileValidationError } from '../../../model/selectors/getIsImageCroppedSquareFileValidationError';
import { setImageCroppedSquareFileMimeType } from '../../../model/services/setImageCroppedSquareFileMimeType';
import { setImageSquareFileMimeType } from '../../../model/services/setImageSquareFileMimeType';
import { getStatus } from '../../../model/selectors/getStatus';
import { FormDataEntries } from '../../../model/filesStorage/types';
import { FilesContext } from '../../../model/filesStorage/FilesContext';

interface IImageInputProps {
    className?: string
}

export const ImageSquareInput: React.FunctionComponent<IImageInputProps> = memo(({
    className
}) => {

    const isImageSquareError = useSelector(getIsImageSquareFileValidationError)
    const isImageCroppedSquareError = useSelector(getIsImageCroppedSquareFileValidationError)
    const status = useSelector(getStatus)

    const isError = isImageSquareError || isImageCroppedSquareError
    const dispatch = useAppDispatch()
    const {
        setFile: setImageFile,
        getFile: getImageFile,
        deleteFile: deleteImageFile
    } = useFile({
        formDataEntryName: FormDataEntries.IMAGE_SQUARE_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setImageSquareFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setImageSquareFileMimeType(undefined))
    })

    const {
        deleteFile: deleteImageCroppedSquareFile,
    } = useFile({
        formDataEntryName: FormDataEntries.IMAGE_CROPPED_SQUARE_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setImageCroppedSquareFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setImageCroppedSquareFileMimeType(undefined))
    })

    const onChangeFileSuccess = useCallback((file: File) => {
        setImageFile(file)
        deleteImageCroppedSquareFile()
    }, [setImageFile, deleteImageCroppedSquareFile])

    const onChangeFileUndefined = useCallback(() => {
        deleteImageFile()
        deleteImageCroppedSquareFile()
    }, [deleteImageFile, deleteImageCroppedSquareFile])


    return (
        <FileInput
            label='Квадратное изображение'
            onChangeFileSuccess={onChangeFileSuccess}
            onChangeFileUndefined={onChangeFileUndefined}
            placeholder='Выбрать изображение...'
            initialFile={getImageFile() as File}
            disabled={status === 'loading'}
            isError={isError}
            className={className}
            data-testid={'image-input-button'}
            inputTestId={'input'}
        />
    );
})

ImageSquareInput.displayName = 'ImageSquareInput'