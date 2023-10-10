import { useCallback } from 'react';
import { IconButton } from '@/shared/ui/IconButton'
import IconNext from '@/shared/assets/svg/Next.svg'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { playerActions } from '@/entity/player';

interface ISetNextTrackProps {
}

export const SetNextTrack: React.FunctionComponent<ISetNextTrackProps> = (props) => {

    const dispatch = useAppDispatch()

    const onNextTrack = useCallback(() => {
        dispatch(playerActions.setNextTrack())
    }, [dispatch])

    return (
        <IconButton
            onClick={onNextTrack}
            icon={<IconNext/>}
            size={'l'}
        />
    );
};
