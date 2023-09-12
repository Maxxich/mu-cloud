import { SyntheticEvent, useCallback } from 'react';
import IconArrow from '@/shared/assets/svg/ArrowBottom.svg'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { playerActions } from '@/entity/player';
import cls from './CloseButton.module.scss'

interface ICloseButtonProps {
}

export const CloseButton: React.FunctionComponent<ICloseButtonProps> = (props) => {

    const dispatch = useAppDispatch()

    const onClose = useCallback((e: SyntheticEvent) => {
        e.stopPropagation()
        dispatch(playerActions.closePlayer())
    }, [dispatch])

    return (
        <button 
            onClick={onClose}
            className={cls.close}
        >
            <IconArrow/>
        </button>
    );
};