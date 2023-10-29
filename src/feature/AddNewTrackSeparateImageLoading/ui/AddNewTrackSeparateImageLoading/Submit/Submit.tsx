import { useCallback, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { useDeleteAllFiles, useGetFile } from '@/entity/fileStorage';
import { getValidationError } from '../../../model/selectors/getValidationError';
import { upload } from '../../../model/services/upload';
import { FormDataEntries } from '../../../model/filesStorage/types';
import { getStatus } from '../../../model/selectors/getStatus';
import { FilesContext } from '../../../model/filesStorage/FilesContext';

interface ISubmitProps {
}

export const Submit: React.FunctionComponent<ISubmitProps> = (props) => {

    const error = useSelector(getValidationError)
    const dispatch = useAppDispatch()
    const status = useSelector(getStatus)
    const getFile = useGetFile({
        context: FilesContext
    })

    const deleteAllFiles = useDeleteAllFiles({
        context: FilesContext,
        formDataEntryNames: [
            FormDataEntries.AUDIO_FILE,
            FormDataEntries.IMAGE_CROPPED_SQUARE_FILE,
            FormDataEntries.IMAGE_CROPPED_WIDE_FILE,
            FormDataEntries.IMAGE_SQUARE_FILE,
            FormDataEntries.IMAGE_WIDE_FILE
        ],
    })

    const onSubmit = useCallback((e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(upload({
            audioFile: getFile(FormDataEntries.AUDIO_FILE),
            imageCroppedSquareFile: getFile(FormDataEntries.IMAGE_CROPPED_SQUARE_FILE),
            imageCroppedWideFile: getFile(FormDataEntries.IMAGE_CROPPED_WIDE_FILE),
            deleteAllFiles,
        }))
    }, [dispatch, getFile, deleteAllFiles])

    return (
        <Button 
            variant={'green'}
            disabled={Boolean(error) && status !== 'loading'}
            onClick={onSubmit}
            fullwidth
        >
            {
                status === 'idle' 
                    ? 'Загрузить'
                    : 'Загрузка...'
            }
        </Button>
    );
};