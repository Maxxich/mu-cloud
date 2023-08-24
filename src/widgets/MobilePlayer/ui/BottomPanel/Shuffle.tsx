import { playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import IconShuffle from '@/shared/assets/svg/Shuffle.svg'
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import { useCallback } from 'react';


interface IShuffleProps {
}

export const Shuffle: React.FunctionComponent<IShuffleProps> = (props) => {

    const dispatch = useAppDispatch()

    const onShufflePlaylist = useCallback(() => {
        dispatch(playerActions.shufflePlaylist())
    }, [dispatch])
    
    
  return (
    <IconButton
    icon={<IconShuffle/>}
    onClick={onShufflePlaylist}
    variant='secondary'
/>
  );
};