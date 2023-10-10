import { useId } from 'react';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { IconButton } from '@/shared/ui/IconButton';
import { playerActions } from '@/entity/player';
import IconPrevius from '@/shared/assets/svg/Previus.svg'

interface ISetPreviousTrackActionProps {
}

export const SetPreviousTrackAction: React.FunctionComponent<ISetPreviousTrackActionProps> = (props) => {

    const dispatch =  useAppDispatch()
    const tooltipId = useId()

    return (
        <IconButton
            icon={<IconPrevius/>}
            size={'l'}
            onClick={() => dispatch(playerActions.setPreviusTrack())}
            tooltipId={`${tooltipId}`}
            tooltipContent='Назад'
            tooltipPlace='bottom'
        />
    );
};