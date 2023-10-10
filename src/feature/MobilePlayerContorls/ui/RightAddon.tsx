import { useSelector } from 'react-redux'
import { useCallback, SyntheticEvent } from 'react';
import { getIsPaused, playerActions } from '@/entity/player';
import IconNext from '@/shared/assets/svg/Next.svg'
import IconXmark from '@/shared/assets/svg/Xmark.svg'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Button } from './Button';

interface IRightAddonProps {
}

export const RightAddon: React.FunctionComponent<IRightAddonProps> = (props) => {

    const paused = useSelector(getIsPaused)
    const dispatch = useAppDispatch()

    const onClearPlayer = useCallback((e: SyntheticEvent) => {
        e.stopPropagation()
        dispatch(playerActions.clearPlaylist())
    }, [dispatch])

    const onNextTrack = useCallback((e: SyntheticEvent) => {
        e.stopPropagation()
        dispatch(playerActions.setNextTrack())
    }, [dispatch])

    if (paused) return (
        <Button
            variant={'primary'}
            onClick={onClearPlayer}
        >
            <IconXmark/>
        </Button>
    )

    return (
        <Button
            variant={'secondary'}
            onClick={onNextTrack}
        >
            <IconNext/>
        </Button>
    );
};