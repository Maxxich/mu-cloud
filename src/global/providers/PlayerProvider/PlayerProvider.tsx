'use client'

import { useSelector } from 'react-redux';
import { getSelectedTrack, useAutoClosingPlayerOnChangeLocation, useObserveChangeCurrentTrack, useObserveChangeRepeatMode, useObserveTogglePause, useObserverChangeCurrentTime } from '@/entity/player';
import { MobilePlayerContorls } from '@/widgets/MobilePlayerContorls';
import { MobilePlayer } from '@/widgets/MobilePlayer';
import { DesktopPlayer, PlaylistWhileOpenedVisualizer } from '@/widgets/DesktopPlayer';
import { DesktopVisualizer } from '@/feature/DesktopVisualizer';

interface IPlayerProviderProps {
    isMobile: boolean
}

export const PlayerProvider: React.FunctionComponent<IPlayerProviderProps> = ({
    isMobile
}) => {

    const selectedTrack = useSelector(getSelectedTrack)



    useObserveChangeCurrentTrack(isMobile)
    useObserveTogglePause()
    useObserveChangeRepeatMode()
    useObserverChangeCurrentTime()
    useAutoClosingPlayerOnChangeLocation()

    if (!selectedTrack) return null

    if (isMobile) return (
        <>
            <MobilePlayerContorls selectedTrack={selectedTrack}/>
            <MobilePlayer/>
        </>
    )

    return (
        <>
            <DesktopVisualizer selectedTrack={selectedTrack}/>
            <PlaylistWhileOpenedVisualizer/>
            <DesktopPlayer/>
        </>
    )
};