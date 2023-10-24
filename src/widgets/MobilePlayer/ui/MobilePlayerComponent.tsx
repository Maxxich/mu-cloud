import { animated } from '@react-spring/web';
import { useCallback, useState } from 'react'
import { playerActions } from '@/entity/player'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import cls from './MobilePlayer.module.scss'
import { ActiveSlide, Carousel } from './Carousel/Carousel';
import { BottomPanel } from './BottomPanel/BottomPanel';
import { CloseButton } from './CloseButton/CloseButton';
import { Backlight } from './Backlight/Backlight';

interface IPlayerExpandedProps {
    style: any
}

export const MobilePlayerComponent: React.FunctionComponent<IPlayerExpandedProps> = ({
    style
}) => {

   
    const dispatch = useAppDispatch()

    const [activeSlide, setActiveSlide] = useState<ActiveSlide>('track')

    const onBackLightClick = useCallback(() => {
        dispatch(playerActions.closePlayer())
    }, [dispatch])



    return (
        <animated.div className={cls.wrapper} style={style}>
            <div className={cls.blackout} onClick={onBackLightClick}/>
            <div className={cls.container} onClick={e => e.stopPropagation()}>
                <Backlight/>
                <CloseButton/>
                <Carousel activeSlide={activeSlide}/>
                <BottomPanel setActiveSlide={setActiveSlide} activeSlide={activeSlide}/>
            </div>
        </animated.div>
    ) 

};

