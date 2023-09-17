import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { TimeLine } from '@/feature/TimeLine';
import { getIsInterfaceHidden, getIsPlayerOpened } from '@/entity/player';
import { SetNextTrackAction } from './Actions/SetNextTrackAction';
import { SetPreviousTrackAction } from './Actions/SetPreviousTrackAction';
import { ShufflePlaylistAction } from './Actions/ShufflePlaylistAction';
import { TogglePauseAction } from './Actions/TogglePauseAction';
import { ToggleRepeatStatusAction } from './Actions/ToggleRepeatStatusAction';
import { ToggleSmallPictureAction } from './Actions/ToggleSmallPictureAction';
// import { ToggleLikeAction } from './Actions/ToggleLikeAction';
// import { TrackInfoAction } from './Actions/TrackInfoAction';
import { TogglePlayerAction } from './Actions/TogglePlayerAction';
import cls from './DesktopPlayer.module.scss'

export const DesktopPlayer: React.FunctionComponent = () => {

    const isOpened = useSelector(getIsPlayerOpened)
    const isInterfaceHidden = useSelector(getIsInterfaceHidden)

    const wrapperMods: Mods = {
        [cls.transparent]: isOpened,
        [cls.hidden]: isOpened && isInterfaceHidden
    }

    const wrapperClasses = classNames(
        cls.wrapper,
        wrapperMods
    )
    
    return(
        <>
            <div className={wrapperClasses}>
                <div className={cls.inner}>
                    <SetPreviousTrackAction/>
                    <TogglePauseAction/>
                    <SetNextTrackAction/>
                    <ToggleRepeatStatusAction/>
                    <ShufflePlaylistAction/>
                    <TimeLine variant='desktop'/>
                    <ToggleSmallPictureAction/>
                    {/* <ToggleLikeAction/> */}
                    {/* <TrackInfoAction/> */}
                    <TogglePlayerAction/>
                </div>
            </div>
        </>
    );
};