import { useCallback, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { getValidationError } from '../../../model/selectors/getValidationError';
import { upload } from '../../../model/services/upload';
import { useAudioFile } from '../../../model/filesStorage/hooks/useAudioFile';
import { useImageFile } from '../../../model/filesStorage/hooks/useImageFile';
import { useImageCroppedWideFile } from '../../../model/filesStorage/hooks/useImageCroppedWideFile';
import { useImageCroppedSquareFile } from '../../../model/filesStorage/hooks/useImageCroppedSquareFile';

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
    
    const {
        getImageCroppedWideFile
    } = useImageCroppedWideFile()

    const {
        getImageCroppedSquareFile
    } = useImageCroppedSquareFile()

    const onSubmit = useCallback((e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(upload({
            audioFile: getAudioFile(),
            imageFile: getImageFile(),
            imageCroppedSquareFile: getImageCroppedSquareFile(),
            imageCroppedWideFile: getImageCroppedWideFile()
        }))
    }, [dispatch, getAudioFile, getImageFile, getImageCroppedSquareFile, getImageCroppedWideFile])

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