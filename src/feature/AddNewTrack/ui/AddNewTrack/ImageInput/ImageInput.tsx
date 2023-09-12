import { useCallback, memo } from 'react'
import { useSelector } from 'react-redux';
import { FileInput } from '@/shared/ui/FileInput/FileInput';
import { useImageFile } from '../../../model/filesStorage/hooks/useImageFile';
import { getIsImageFileValidationError } from '../../../model/selectors/getIsImageFileValidationError';
import { getIsImageCroppedWideFileValidationError } from '../../../model/selectors/getIsImageCroppedWideFileValidationError';
import { getIsImageCroppedSquareFileValidationError } from '../../../model/selectors/getIsImageCroppedSquareFileValidationError';
import { useImageCroppedWideFile } from '../../../model/filesStorage/hooks/useImageCroppedWideFile';
import { useImageCroppedSquareFile } from '../../../model/filesStorage/hooks/useImageCroppedSquareFile';

interface IImageInputProps {
    className?: string
}

export const ImageInput: React.FunctionComponent<IImageInputProps> = memo(({
    className
}) => {

    const isImageError = useSelector(getIsImageFileValidationError)
    const isImageCroppedWideError = useSelector(getIsImageCroppedWideFileValidationError)
    const isImageCroppedSquareError = useSelector(getIsImageCroppedSquareFileValidationError)

    const isError = isImageError || isImageCroppedWideError || isImageCroppedSquareError
    const {
        getImageFile,
        setImageFile
    } = useImageFile()

    const {

        setImageCroppedWideFile
    } = useImageCroppedWideFile()

    const {
        setImageCroppedSquareFile
    } = useImageCroppedSquareFile()

    const onChangeFileSuccess = useCallback((file: File) => {
        setImageFile(file)
        setImageCroppedWideFile(undefined)
        setImageCroppedSquareFile(undefined)
    }, [setImageFile, setImageCroppedWideFile, setImageCroppedSquareFile])

    const onChangeFileUndefined = useCallback(() => {
        setImageFile(undefined)
        setImageCroppedWideFile(undefined)
        setImageCroppedSquareFile(undefined)
    }, [setImageFile, setImageCroppedWideFile, setImageCroppedSquareFile])


    return (
        <FileInput
            label='Изображение'
            onChangeFileSuccess={onChangeFileSuccess}
            onChangeFileUndefined={onChangeFileUndefined}
            placeholder='Выбрать изображение...'
            initialFile={getImageFile() as File}
            isError={isError}
            className={className}
            data-testid={'image-input-button'}
            inputTestId={'input'}
        />
    );
})

ImageInput.displayName = 'ImageInput'