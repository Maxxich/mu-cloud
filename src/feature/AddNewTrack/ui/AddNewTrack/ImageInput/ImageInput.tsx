import { useCallback, memo } from 'react'
import { FileInput } from '@/shared/ui/FileInput/FileInput';
import { useImageFile } from '../../../model/filesStorage/hooks/useImageFile';
import { useSelector } from 'react-redux';
import { getIsImageFileValidationError } from '../../../model/selectors/getIsImageFileValidationError';

interface IImageInputProps {
    className?: string
}

export const ImageInput: React.FunctionComponent<IImageInputProps> = memo(({
  className
}) => {

  const isError = useSelector(getIsImageFileValidationError)

    const {
        getImageFile,
        setImageFile
      } = useImageFile()

      const onChangeFileSuccess = useCallback((file: File) => {
        setImageFile(file)
    }, [setImageFile])

    const onChangeFileUndefined = useCallback(() => {
        setImageFile(undefined)
    }, [setImageFile])


  return (
    <FileInput
        label='Изображение'
        onChangeFileSuccess={onChangeFileSuccess}
        onChangeFileUndefined={onChangeFileUndefined}
        placeholder='Выбрать изображение...'
        initialFile={getImageFile() as File}
        isError={isError}
        className={className}
    />
  );
})

ImageInput.displayName = 'ImageInput'