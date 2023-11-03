import { useCallback } from 'react';
import { playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import cls from './Blackout.module.scss'

interface IBlackoutProps {
}

export const Blackout: React.FunctionComponent<IBlackoutProps> = (props) => {

    const dispatch = useAppDispatch()

    const onBlackoutClick = useCallback(() => {
        dispatch(playerActions.closePlayer())
    }, [dispatch])

    return (
        <div className={cls.blackout} onClick={onBlackoutClick}/>
    )
};
