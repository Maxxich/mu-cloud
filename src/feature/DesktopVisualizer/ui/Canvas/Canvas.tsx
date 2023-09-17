import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { playerActions } from '@/entity/player'
import cls from './Canvas.module.scss'
import { useStartTick } from '../../lib/canvas/useStartTick'

export const Canvas: React.FunctionComponent = () => {
    
    const dispatch = useAppDispatch()
    
    const { ref } = useStartTick()

    return (
        <canvas className={cls.canvas} 
            onClick={() => dispatch(playerActions.togglePause())} 
            ref={ref as any}
        />
    );
};

