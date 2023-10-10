import { useId } from 'react';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { IconButton } from '@/shared/ui/IconButton';
import { playerActions } from '@/entity/player';
import IconShuffle from '@/shared/assets/svg/Shuffle.svg'

interface IShufflePlaylistActionProps {
}

export const ShufflePlaylistAction: React.FunctionComponent<IShufflePlaylistActionProps> = (props) => {

    const dispatch =  useAppDispatch()
    const tooltipId = useId()

    return (
        <IconButton
            icon={<IconShuffle/>}
            size={'l'}
            onClick={() => dispatch(playerActions.shufflePlaylist())}
            tooltipId={`${tooltipId}`}
            tooltipContent='Перемешать'
            tooltipPlace='bottom'
        />
    );
};