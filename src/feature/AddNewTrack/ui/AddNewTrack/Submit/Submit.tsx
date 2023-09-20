import { useCallback, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { useGetFile } from '@/entity/fileStorage';
import { getValidationError } from '../../../model/selectors/getValidationError';
import { upload } from '../../../model/services/upload';
import { FormDataEntries } from '../../../model/filesStorage/types';
import { FilesContext } from '../../../model/filesStorage/FilesContext';

interface ISubmitProps {
}

export const Submit: React.FunctionComponent<ISubmitProps> = (props) => {

    const error = useSelector(getValidationError)
    const dispatch = useAppDispatch()
    const getFile = useGetFile({
        context: FilesContext
    })

    const onSubmit = useCallback((e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(upload({
            audioFile: getFile(FormDataEntries.AUDIO_FILE),
            imageFile: getFile(FormDataEntries.IMAGE_FILE),
            imageCroppedSquareFile: getFile(FormDataEntries.IMAGE_CROPPED_SQUARE_FILE),
            imageCroppedWideFile: getFile(FormDataEntries.IMAGE_CROPPED_WIDE_FILE)
        }))
    }, [dispatch, getFile])

    return (
        <Button 
            variant={'green'}
            disabled={Boolean(error)}
            onClick={onSubmit}
            fullwidth
        >
        Загрузить
        </Button>
    );
};