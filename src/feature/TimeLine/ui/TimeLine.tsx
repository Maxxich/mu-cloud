'use client'

import { isBrowser } from 'react-device-detect';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getCurrentTrackTime, getCurrentTrackTimeLenght } from '@/entity/player';
import { formatTime } from '@/shared/lib/helpers/formatTime/formatTime';
import { Time } from './Time/Time';
import cls from './TimeLine.module.scss'
import { Slider } from './Slider/Slider';

interface ITimeLineProps {
    variant: 'mobile' | 'desktop'
}

export const TimeLine: React.FunctionComponent<ITimeLineProps> = ({
    variant
}) => {

    const handleTouch = (e:any) => {
        e.stopPropagation()
    }

    const time = useSelector(getCurrentTrackTime)
    const timeLenght = useSelector(getCurrentTrackTimeLenght)

    const LeftTime = <Time variant={variant}>
        {formatTime(time!)}
    </Time>
  

    const RightTime = <Time variant={variant}>
        {'-' + formatTime(timeLenght!-time!)}
    </Time>

    const SliderEl =  <Slider variant={variant}/>

    const BrowserView = (
        <div className={cls.desktop}>
            {LeftTime}
            {SliderEl}
            {RightTime}
        </div>
    )

    const MobileView = (
        <div>
            {SliderEl}
            <div className={cls.times}>
                {LeftTime}
                {RightTime}
            </div>
        </div>
    )
    

    const mods: Mods = {
        [cls.browser]: isBrowser
    }

    return(
        <div
            className={classNames(cls.container, mods)}
            onTouchEnd={handleTouch}
            onTouchMove={handleTouch}
            onTouchStart={handleTouch}
        >
            {variant === 'desktop' && BrowserView}
            {variant === 'mobile' && MobileView}
        </div>
    );
};