import { useDrag, useScroll } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/web';
import { useState, useRef, useEffect, useId } from 'react'
import { playerActions } from '@/entity/player'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { hasParentWithId } from '@/shared/lib/helpers/haveParentWithId/haveParentWithId';
import cls from './MobilePlayer.module.scss'
import { ActiveSlide, Carousel } from './Carousel/Carousel';
import { BottomPanel } from './BottomPanel/BottomPanel';
import { CloseButton } from './CloseButton/CloseButton';
import { Backlight } from './Backlight/Backlight';
import { Blackout } from './Blackout/Blackout';

interface IPlayerExpandedProps {
    style: any
}

export const MobilePlayerComponent: React.FunctionComponent<IPlayerExpandedProps> = ({
    style
}) => {

    const dispatch = useAppDispatch()
    const [activeSlide, setActiveSlide] = useState<ActiveSlide>('track')
    const ref = useRef<HTMLDivElement>(null)
    const scrollProgressRef = useRef<number>(0)
    const playlistId = useId()

    const [props, api] = useSpring(() => ({
        x:0
    })) 

    useScroll(({ xy: [, y] }) => {
        scrollProgressRef.current = (y / document.getElementById(playlistId)!.scrollHeight) * 100
    }, {
        target: document.getElementById(playlistId)!
    })


    const bind = useDrag(({ movement: [movx, movy], event }) => {
        const dragToClosePlayerTrigger = movy > 200

        if (dragToClosePlayerTrigger) {

            const isNextSide = activeSlide === 'next'
            const isTrackSide = activeSlide === 'track'

            const isTargetNotPlaylist = !hasParentWithId(event.target as HTMLElement, playlistId)
            const isPlaylistScrollProgress0 = (scrollProgressRef.current === 0)

            const closeOnPlaylistTrigger = isNextSide && (isTargetNotPlaylist || isPlaylistScrollProgress0)
            const closeOnTrackTrigger = isTrackSide

            const closeTrigger = closeOnPlaylistTrigger || closeOnTrackTrigger

            if (closeTrigger) dispatch(playerActions.closePlayer())
        }

        const cancelDragOnInputTrigger = (event?.target as any).tagName?.toUpperCase() == 'INPUT'
        if (cancelDragOnInputTrigger) return


        let maxX = 0
        if (ref?.current) {
            maxX = ref.current.clientWidth/2
        }

        const dragToNextTrigger = movx < -100

        if (dragToNextTrigger) return setActiveSlide('next')
        
        const dragToTrackTrigger = movx > 100

        if (dragToTrackTrigger) return setActiveSlide('track')
    }, {
        pointer: {
            touch: true
        }
    })

    useEffect(() => {
        if (activeSlide === 'track') {
            api.start(() => ({
                x: 0,
                immediate: true
            }))
        } else {
            api.start(() => ({
                x: -(ref?.current?.clientWidth ?? 0)/2,
                immediate: true
            }))
        }
    }, [activeSlide, api])



    return (
        <animated.div className={cls.wrapper} style={style}>
            <Blackout/>
            <div className={cls.container} 
                onClick={e => e.stopPropagation()} 
                {...bind()}
            >
                <Backlight/>
                <CloseButton/>
                <Carousel props={props} ref={ref} playlistId={playlistId}/>
                <BottomPanel setActiveSlide={setActiveSlide} activeSlide={activeSlide}/>
            </div>
        </animated.div>
    ) 

};

