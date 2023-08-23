import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { getIsPaused, togglePause } from '@/entity/player';
import IconPlay from '@/shared/assets/svg/Play.svg'
import IconPause from '@/shared/assets/svg/Pause.svg'
import { Button } from './Button/Button';

interface ITogglePauseProps {
}

export const TogglePause: React.FunctionComponent<ITogglePauseProps> = (props) => {

    const paused = useSelector(getIsPaused)
    const dispatch = useAppDispatch()
    const onClick = useCallback(() => {
        dispatch(togglePause())
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