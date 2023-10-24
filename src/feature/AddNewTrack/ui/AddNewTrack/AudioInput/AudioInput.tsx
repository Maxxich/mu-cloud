import { useCallback, memo } from 'react'
import { useSelector } from 'react-redux';
import { FileInput } from '@/shared/ui/FileInput';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { useFile } from '@/entity/fileStorage';
import { setAudioFileMimeType } from '../../../model/services/setAudioFileMimeType';
import { getIsAudioFileValidationError } from '../../../model/selectors/getIsAudioFileValidationError';
import { FilesContext } from '../../../model/filesStorage/FilesContext';
import { getStatus } from '../../../model/selectors/getStatus';
import { FormDataEntries } from '../../../model/filesStorage/types';

interface IAudioInputProps {
  className?: string
}

export const AudioInput: React.FunctionComponent<IAudioInputProps> = memo(({
    className
}) => {

    const isError = useSelector(getIsAudioFileValidationError)
    const dispatch = useAppDispatch()
    const status = useSelector(getStatus)

    const {
        deleteFile,
        getFile,
        setFile
    } = useFile({
        formDataEntryName: FormDataEntries.AUDIO_FILE,
        context: FilesContext,
        onSetFile: (file) => dispatch(setAudioFileMimeType(file.type)),
        onDeleteFile: () => dispatch(setAudioFileMimeType(undefined))
    })

    const onChangeFileSuccess = useCallback((file: File) => {
        setFile(file)
    }, [setFile])

    const onChangeFileUndefined = useCallback(() => {
        deleteFile()
    }, [deleteFile])

    const file = getFile() as File | undefined
    const fileName = file?.name

    return (
        <FileInput
            label='Аудиофайл'
            onChangeFileSuccess={onChangeFileSuccess}
            onChangeFileUndefined={onChangeFileUndefined}
            disabled={status === 'loading'}
            placeholder='Выбрать аудиофайл...'
            initialFileName={fileName}
            isError={isError}
            className={className}
        />
    );
})

AudioInput.displayName = 'AudioInput'