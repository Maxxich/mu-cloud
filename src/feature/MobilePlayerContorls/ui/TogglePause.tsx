import { useSelector } from 'react-redux'
import { SyntheticEvent, useCallback } from 'react'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { getIsPaused, playerActions } from '@/entity/player';
import IconPlay from '@/shared/assets/svg/Play.svg'
import IconPause from '@/shared/assets/svg/Pause.svg'
import { Button } from './Button';

interface ITogglePauseProps {
}

export const TogglePause: React.FunctionComponent<ITogglePauseProps> = (props) => {

    const paused = useSelector(getIsPaused)
    const dispatch = useAppDispatch()
    const onClick = useCallback((e: SyntheticEvent) => {
        e.stopPropagation()
        dispatch(playerActions.togglePause())
    }, [dispatch])

    const icon = paused ? <IconPlay/> : <IconPause/>

    return (
        <Button
            variant='secondary'
            onClick={onClick}
        >
            {icon}
        </Button>
    );
};