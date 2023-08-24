'use client'

import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { getSelectedTrack, useObserveChangeCurrentTrack, useObserveChangeRepeatMode, useObserveTogglePause, useObserverChangeCurrentTime } from '@/entity/player';
import { MobilePlayerContorls } from '@/feature/MobilePlayerContorls';

interface IPlayerProviderProps {
}

export const PlayerProvider: React.FunctionComponent<IPlayerProviderProps> = (props) => {

    const selectedTrack = useSelector(getSelectedTrack)

    useObserveChangeCurrentTrack()
    useObserveTogglePause()
    useObserveChangeRepeatMode()
    useObserverChangeCurrentTime()

    if (!selectedTrack) return null

    if (isMobile) return (
        <MobilePlayerContorls selectedTrack={selectedTrack}/>
    )

    return null
};