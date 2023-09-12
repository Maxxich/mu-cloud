import { useCallback, memo } from 'react'
import { useSelector } from 'react-redux';
import { FileInput } from '@/shared/ui/FileInput/FileInput';
import { useAudioFile } from '../../../model/filesStorage/hooks/useAudioFile';
import { getIsAudioFileValidationError } from '../../../model/selectors/getIsAudioFileValidationError';

interface IAudioInputProps {
  className?: string
}

export const AudioInput: React.FunctionComponent<IAudioInputProps> = memo(({
    className
}) => {

    const isError = useSelector(getIsAudioFileValidationError)

    const {
        getAudioFile,
        setAudioFile
    } = useAudioFile()

    const onChangeFileSuccess = useCallback((file: File) => {
        setAudioFile(file)
    }, [setAudioFile])

    const onChangeFileUndefined = useCallback(() => {
        setAudioFile(undefined)
    }, [setAudioFile])


    return (
        <FileInput
            label='Аудиофайл'
            onChangeFileSuccess={onChangeFileSuccess}
            onChangeFileUndefined={onChangeFileUndefined}
            placeholder='Выбрать аудиофайл...'
            initialFile={getAudioFile() as File}
            isError={isError}
            className={className}
        />
    );
})

AudioInput.displayName = 'AudioInput'