'use client'
import { animated, useTransition } from '@react-spring/web';
import { Track } from '@/entity/track';
import cls from './Actions.module.scss';
import { PlayAction } from './PlayAction/PlayAction';
import { LikeAction } from './LikeAction/LikeAction';
import { MobileMenu } from './MenuMobile/MenuMobile';
import { MenuDesktop } from './MenuDesktop/MenuDesktop';

interface IActionsProps {
    track: Track
    isMobile: boolean
}

export const Actions: React.FunctionComponent<IActionsProps> = ({
    track,
    isMobile
}) => {

    const transition = useTransition(true, {
        from: { opacity: 0, y: 20 },
        enter:{ opacity: 1, y: 0 },
        delay: 400,
        config: {
            duration: 500,

        },
    })

    return transition((style, item) => 
        item ? (
            <animated.div className={cls.actions} style={style}>
                <PlayAction track={track}/>
                <LikeAction id={track.id}/>
                {
                    isMobile
                        ? <MobileMenu track={track}/>
                        : <MenuDesktop track={track}/>
                }
            </animated.div>
        ) : null
    )
};