import { useId } from 'react';
import { useSelector } from 'react-redux';
import { getIsPlayerOpened, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import IconArrowBottom from '@/shared/assets/svg/ArrowBottom.svg'

interface ITogglePlayerActionProps {
}

export const TogglePlayerAction: React.FunctionComponent<ITogglePlayerActionProps> = (props) => {

    const tooltipId = useId()
    const dispatch =  useAppDispatch()
    const isOpened = useSelector(getIsPlayerOpened)

    return (
        <IconButton
            rotated={isOpened}
            willRotate
            icon={<IconArrowBottom/>}
            size={'l'}
            onClick={() => dispatch(playerActions.togglePlayerIsOpened())}
            tooltipId={`${tooltipId}`}
            tooltipContent={isOpened ? 'Закрыть визуализатор' : 'Открыть визуализатор'}
            tooltipPlace='bottom'
        />
    );
};