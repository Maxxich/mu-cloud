
import { useId } from 'react';
import { useSelector } from 'react-redux';
import { getIsPaused, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { IconButton } from '@/shared/ui/IconButton';
import IconPlay from '@/shared/assets/svg/Play.svg'
import IconPause from '@/shared/assets/svg/Pause.svg'

interface ITogglePauseActionProps {
}

export const TogglePauseAction: React.FunctionComponent<ITogglePauseActionProps> = (props) => {

    const tooltipId = useId()
    const dispatch =  useAppDispatch()
    const isPaused = useSelector(getIsPaused)

    return (
        <IconButton
            icon={isPaused ? <IconPlay/> : <IconPause/>}
            size={'l'}
            onClick={() => dispatch(playerActions.togglePause())}
            tooltipId={`${tooltipId}`}
            tooltipContent={isPaused ? 'Продолжить' : 'Пауза'}
            tooltipPlace='bottom'
      
        />
    );
};