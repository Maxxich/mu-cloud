'use client'

import { Suspense, useCallback } from 'react';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { getIsPaused, getSelectedTrackId, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Track as ITrack } from '@/entity/track';
import { TrackCardMobileAsync } from './Mobile/TrackCardMobile.async';
import { TrackCardDesktopAsync } from './Desktop/TrackCardDesktop.async';

interface ITrackProps {
    track: ITrack
    tracks: ITrack[]
}

export const TrackCard: React.FunctionComponent<ITrackProps> = ({
    track, tracks
}) => {

    const isPaused = useSelector(getIsPaused)
    const selectedTrackId = useSelector(getSelectedTrackId)

    const dispatch = useAppDispatch()

    const onToggleTrack = useCallback((id: number) => {
        dispatch(playerActions.overwriteList({
            list: tracks,
            startsWithId: id
        }))
    }, [dispatch, tracks])

    if (isMobile) return (
        <Suspense fallback={<div>Loading...</div>}>
            <TrackCardMobileAsync
                author={track.owners[0].name}
                author_href={track.owners[0].adress}
                duration={track.duration}
                id={track.id}
                image_src={'http://localhost:5001/' + track.picture_source.square_small}
                isPaused={isPaused}
                isSelected={selectedTrackId === track.id}
                onToggleTrack={onToggleTrack}
                primary_name={track.name}
                track_href={'/tracks/' + track.id}
                track_src={track.audio_src}
                secondary_name={track.name_secondary}
            />
        </Suspense>
    )


    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TrackCardDesktopAsync
                author={track.owners[0].name}
                author_href={track.owners[0].adress}
                duration={track.duration}
                id={track.id}
                image_src={'http://localhost:5001/' + track.picture_source.square_small}
                isPaused={isPaused}
                isSelected={selectedTrackId === track.id}
                onToggleTrack={onToggleTrack}
                primary_name={track.name}
                track_href={'/tracks/' + track.id}
                track_src={track.audio_src}
                secondary_name={track.name_secondary}
            />
        </Suspense>
    )
};