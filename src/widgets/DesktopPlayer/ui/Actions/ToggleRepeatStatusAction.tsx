import { useId } from 'react';
import { useSelector } from 'react-redux';
import { getRepeatTrackMode, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { IconButton } from '@/shared/ui/IconButton';
import IconRepeat from '@/shared/assets/svg/Repeat.svg'

interface IToggleRepeatStatusActionProps {
}

export const ToggleRepeatStatusAction: React.FunctionComponent<IToggleRepeatStatusActionProps> = (props) => {

    const dispatch =  useAppDispatch()
    const repeatTrackMode = useSelector(getRepeatTrackMode)
    const tooltipId = useId()

    return (
        <IconButton
            icon={<IconRepeat/>}
            size={'l'}
            onClick={() => dispatch(playerActions.toggleRepeatTrackMode())}
            variant={repeatTrackMode ? 'default' : 'secondary'}
            tooltipId={`${tooltipId}`}
            tooltipContent={repeatTrackMode ? 'Не повторять' : 'Повторять'}
            tooltipPlace='bottom'
        />
    );
};