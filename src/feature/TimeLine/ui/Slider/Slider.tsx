import { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { getCurrentTrackTime, getCurrentTrackTimeLenght, playerActions, getLoadedPercentage } from '@/entity/player'
import { useAudio } from '@/shared/lib/hooks/useAudio/useAudio'
import cls from './Slider.module.scss'

interface ISliderProps {
    variant: 'mobile' | 'desktop'
}

export const Slider: React.FunctionComponent<ISliderProps> = ({
    variant
}) => {

    const current = useSelector(getCurrentTrackTime)
    const total = useSelector(getCurrentTrackTimeLenght)
    const loadedPercentage = useSelector(getLoadedPercentage) 
    const audio = useAudio()
    const dispatch = useAppDispatch()


    const sliderRef = useRef<HTMLDivElement>(null)
    const [isDrag, setDrag] = useState<boolean>(false)

    const [{ width }, api] = useSpring(() => ({ width: '0%' }))

    const bind = useDrag((state) => {
        const { xy: [x],  event, last } = state
        const avalibleWidth = sliderRef?.current?.offsetWidth
        const elementOffsetX = sliderRef?.current?.getBoundingClientRect().left;
        //@ts-ignore
        if (!total || !audio || !avalibleWidth || !elementOffsetX || !event.pageX) {
            return setDrag(false)
        }
        //@ts-ignore
        const offsetX = event.pageX - elementOffsetX 
        const percent = offsetX/avalibleWidth
        const reducedPercent = (percent < 0)
            ? 0
            : (percent > 1) 
                ? 1
                : percent
        if (last) {
            const time = total * reducedPercent
            audio.currentTime = time
            dispatch(playerActions.overwriteCurrentTrackTime(time))
            setDrag(false)
        } else {
            setDrag(true)
            api.start({
                width: `${reducedPercent * 100}%`,
                immediate: true
            })
        }
    })

    const playedProgress = ((current ?? 0)/(total ?? 1) * 100)+'%'

    return (
        <div className={classNames(cls.container, cls[variant])} {...bind()} ref={sliderRef}>
            <div 
                className={classNames(cls.baseLine, cls[variant])}
            >
                <div 
                    className={classNames(cls.loadedLine, cls[variant])} 
                    style={{
                        width: (loadedPercentage ?? 0) + '%'
                    }}
                />
                <animated.div 
                    className={classNames(cls.playedLine, cls[variant])} 
                    style={{
                        width: isDrag ? width : playedProgress
                    }}
                >
                    <div 
                        className={classNames(cls.thumb, cls[variant])} 
                    />
                </animated.div>

            </div>

        </div>
    );
}