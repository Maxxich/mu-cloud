import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { getStatus } from '../../../model/selectors/getStatus';
import { getIsSoftReset } from '../../../model/selectors/getIsSoftReset'
import { AddNewTrackSeparateImageLoadingActions } from '../../../model/slices/AddNewTrackSeparateImageLoading';

export const ResetMode: React.FunctionComponent = (props) => {

    const isSoftReset = useSelector(getIsSoftReset)
    const status = useSelector(getStatus)
    const dispatch = useAppDispatch()

    const onButtonClick = () => {
        dispatch(AddNewTrackSeparateImageLoadingActions.toggleSoftReset())
    }

    return (
        <>
            <Button
                disabled={status === 'loading'}
                onClick={onButtonClick}
            >
                {
                    isSoftReset
                        ? 'Мягкая очистка формы'
                        : 'Жесткая очистка формы'
                }
            </Button>
        </>
    );
}