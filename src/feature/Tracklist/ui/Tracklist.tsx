'use client'

import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { getIsPaused, getSelectedTrackId, playerActions } from '@/entity/player';
import { Track } from '@/entity/track';
import { TrackCardDesktop } from './Desktop/TrackCardDesktop';
import { TrackCardMobile } from './Mobile/TrackCardMobile'

interface ITracklistProps {
    tracks: Track[]
}

export const Tracklist: React.FunctionComponent<ITracklistProps> = ({
    tracks
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
        <>
            {tracks.map(t => (
                <TrackCardMobile
                    key={t.id}
                    author={t.owners[0].name}
                    author_href={t.owners[0].adress}
                    duration={t.duration}
                    id={t.id}
                    image_src={'http://localhost:5001/' + t.picture_source.square_small}
                    isPaused={isPaused}
                    isSelected={selectedTrackId === t.id}
                    onToggleTrack={onToggleTrack}
                    primary_name={t.name}
                    track_href={'/tracks/' + t.id}
                    track_src={t.audio_src}
                    secondary_name={t.name_secondary}
                />
            ))}
        </>
    )


    return (
        <>
            {tracks.map(t => (
                <TrackCardDesktop
                    key={t.id}
                    author={t.owners[0].name}
                    author_href={t.owners[0].adress}
                    duration={t.duration}
                    id={t.id}
                    image_src={'http://localhost:5001/' + t.picture_source.square_small}
                    isPaused={isPaused}
                    isSelected={selectedTrackId === t.id}
                    onToggleTrack={onToggleTrack}
                    primary_name={t.name}
                    track_href={'/tracks/' + t.id}
                    track_src={t.audio_src}
                    secondary_name={t.name_secondary}
                />
            ))}
        </>
    );
};