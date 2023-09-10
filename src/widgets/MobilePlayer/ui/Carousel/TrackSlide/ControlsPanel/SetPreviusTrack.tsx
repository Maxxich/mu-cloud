import { useCallback } from 'react';
import { IconButton } from '@/shared/ui/IconButton/IconButton'
import IconPrevius from '@/shared/assets/svg/Previus.svg'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { playerActions } from '@/entity/player';

interface ISetPreviusTrackProps {
}

export const SetPreviusTrack: React.FunctionComponent<ISetPreviusTrackProps> = (props) => {

  const dispatch = useAppDispatch()

  const onPreviusTrack = useCallback(() => {
    dispatch(playerActions.setPreviusTrack())
  }, [dispatch])

  return (
    <IconButton
      onClick={onPreviusTrack}
      icon={<IconPrevius/>}
      size={'l'}
    />
  );
};
