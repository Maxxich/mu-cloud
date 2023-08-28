import { playerActions } from '@/entity/player';
import { getRepeatTrackMode } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import IconRepeat from '@/shared/assets/svg/Repeat.svg'
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';


interface IRepeatProps {
}

export const Repeat: React.FunctionComponent<IRepeatProps> = (props) => {

    const dispatch = useAppDispatch()

    const isRepeat = useSelector(getRepeatTrackMode)

    const onChangeRepeatStatus = useCallback(() => {
        dispatch(playerActions.toggleRepeatTrackMode())
    }, [dispatch])
    
  return (
    <IconButton
    icon={<IconRepeat/>}
    onClick={onChangeRepeatStatus}
    variant={isRepeat ? 'default' : 'secondary'}
/>
  );
};