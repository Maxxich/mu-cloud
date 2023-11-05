'use client'
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useTransition, animated } from '@react-spring/web';
import { TimeLine } from '@/feature/TimeLine';
import { getIsInterfaceHidden, getIsPlayerOpened, getSelectedTrack } from '@/entity/player';
import { SetNextTrackAction } from './Actions/SetNextTrackAction';
import { SetPreviousTrackAction } from './Actions/SetPreviousTrackAction';
import { ShufflePlaylistAction } from './Actions/ShufflePlaylistAction';
import { TogglePauseAction } from './Actions/TogglePauseAction';
import { ToggleRepeatStatusAction } from './Actions/ToggleRepeatStatusAction';
import { ToggleSmallPictureAction } from './Actions/ToggleSmallPictureAction';
import { TogglePlayerAction } from './Actions/TogglePlayerAction';
import cls from './DesktopPlayer.module.scss'
import { TogglePlaylistAction } from './Actions/TogglePlaylistAction/TogglePlaylistAction';

export const DesktopPlayer: React.FunctionComponent = () => {

    const isOpened = useSelector(getIsPlayerOpened)
    const selectedTrack = useSelector(getSelectedTrack)
    const isInterfaceHidden = useSelector(getIsInterfaceHidden)

    const transition = useTransition(Boolean(selectedTrack), {
        from: { opacity: 0, y: 58 },
        enter:{ opacity: 1, y: 0 },
        leave: { opacity: 0, y: 58 },
        config: {
            duration: 500,
        },
    })

    const wrapperMods: Mods = {
        [cls.transparent]: isOpened,
        [cls.hidden]: isOpened && isInterfaceHidden
    }

    const wrapperClasses = classNames(
        cls.wrapper,
        wrapperMods
    )

    return transition((style, item) => 
        item ?
            <>
                <animated.div className={wrapperClasses} style={style}>
                    <div className={cls.inner}>
                        <SetPreviousTrackAction/>
                        <TogglePauseAction/>
                        <SetNextTrackAction/>
                        <ToggleRepeatStatusAction/>
                        <ShufflePlaylistAction/>
                        <TimeLine variant='desktop'/>
                        <TogglePlaylistAction/>
                        <ToggleSmallPictureAction/>
                        <TogglePlayerAction/>
                    </div>
                </animated.div>
            </>
            : null
    );
};

