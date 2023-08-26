import { upload } from '../../../model/services/upload';
import { getValidationError } from '../../../model/selectors/getValidationError';
import { Button } from '@/shared/ui/Button/Button';
import { useCallback, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { useAudioFile } from '../../../model/filesStorage/hooks/useAudioFile';
import { useImageFile } from '../../../model/filesStorage/hooks/useImageFile';

interface ISubmitProps {
}

export const Submit: React.FunctionComponent<ISubmitProps> = (props) => {

    const error = useSelector(getValidationError)
    const dispatch = useAppDispatch()
    const {
        getAudioFile
    } = useAudioFile()
    const {
        getImageFile
    } = useImageFile()

    const onSubmit = useCallback((e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(upload({
            audioFile: getAudioFile(),
            imageFile: getImageFile()
        }))
    }, [dispatch, getAudioFile, getImageFile])

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