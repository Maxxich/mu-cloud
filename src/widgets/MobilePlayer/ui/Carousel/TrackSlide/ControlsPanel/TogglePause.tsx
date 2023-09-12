import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { IconButton } from '@/shared/ui/IconButton/IconButton'
import IconPause from '@/shared/assets/svg/Pause.svg'
import IconPlay from '@/shared/assets/svg/Play.svg'
import { getIsPaused, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';

interface ITogglePauseProps {
}

export const TogglePause: React.FunctionComponent<ITogglePauseProps> = (props) => {

    const isPaused = useSelector(getIsPaused)
    const dispatch = useAppDispatch()

    const onTogglePause = useCallback(() => {
        dispatch(playerActions.togglePause())
    }, [dispatch])

    return (
        <IconButton
            onClick={onTogglePause}
            icon={isPaused ? <IconPlay/> : <IconPause/>}
            size={'xl'}
        />
    );
};
