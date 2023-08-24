import { IconButton } from '@/shared/ui/IconButton/IconButton'
import IconPause from '@/shared/assets/svg/Pause.svg'
import IconPlay from '@/shared/assets/svg/Play.svg'
import { useSelector } from 'react-redux';
import { getIsPaused, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { useCallback } from 'react';

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
