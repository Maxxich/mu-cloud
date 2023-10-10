
import { useId } from 'react';
import { playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { IconButton } from '@/shared/ui/IconButton';
import IconNext from '@/shared/assets/svg/Next.svg'

interface ISetNextTrackActionProps {
}

export const SetNextTrackAction: React.FunctionComponent<ISetNextTrackActionProps> = (props) => {

    const dispatch =  useAppDispatch()
    const tooltipId = useId()

    return (
        <IconButton
            icon={<IconNext/>}
            size={'l'}
            onClick={() => dispatch(playerActions.setNextTrack())}
            tooltipId={`${tooltipId}`}
            tooltipContent='Далее'
            tooltipPlace='bottom'
        />
    );
};