'use client'

import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { getIsPlayerOpened, getSelectedTrack, useObserveChangeCurrentTrack, useObserveChangeRepeatMode, useObserveTogglePause, useObserverChangeCurrentTime } from '@/entity/player';
import { MobilePlayerContorls } from '@/feature/MobilePlayerContorls';
import { MobilePlayer } from '@/widgets/MobilePlayer';
import { DesktopPlayer } from '@/widgets/DesktopPlayer';
import { DesktopVisualizer } from '@/feature/DesktopVisualizer';

interface IPlayerProviderProps {
}

export const PlayerProvider: React.FunctionComponent<IPlayerProviderProps> = (props) => {

    const selectedTrack = useSelector(getSelectedTrack)

    const isOpened = useSelector(getIsPlayerOpened)

    useObserveChangeCurrentTrack()
    useObserveTogglePause()
    useObserveChangeRepeatMode()
    useObserverChangeCurrentTime()

    if (!selectedTrack) return null

    if (isMobile) return (
        <>
            <MobilePlayerContorls selectedTrack={selectedTrack}/>
            {isOpened && <MobilePlayer/>}
        </>
    )

    return (
        <>
            {isOpened && <DesktopVisualizer track={selectedTrack}/>}
            <DesktopPlayer/>
        </>
    )
};