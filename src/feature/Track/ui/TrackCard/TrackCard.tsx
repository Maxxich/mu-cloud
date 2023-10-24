'use client'

import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { backendUrl } from '@/shared/const/backendUrl';
import { getIsPaused, getPlaylist, getSelectedTrackId, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Track as ITrack } from '@/entity/track';
import { TrackCardMobile } from './components/Mobile/TrackCardMobile';
import { TrackCardDesktop } from './components/Desktop/TrackCardDesktop';
import { Width } from '../../model/types/TrackCard';

interface ITrackProps {
    track: ITrack
    tracks: ITrack[]
    isMobile: boolean
    showIsDeleted?: boolean
    width?: Width
    activeInMenu?: boolean
}

export const TrackCard: React.FunctionComponent<ITrackProps> = ({
    track, tracks, width, isMobile, showIsDeleted, activeInMenu
}) => {

    const isPaused = useSelector(getIsPaused)
    const playlist = useSelector(getPlaylist)
    const selectedTrackId = useSelector(getSelectedTrackId)

    const dispatch = useAppDispatch()

    const onToggleTrack = useCallback((id: number) => {
        if ((id === selectedTrackId) && (JSON.stringify(playlist) === JSON.stringify(tracks))) {
            return dispatch(playerActions.togglePause())
        } 
        dispatch(playerActions.overwriteList({
            list: tracks,
            startsWithId: id
        }))
    }, [dispatch, tracks, playlist, selectedTrackId])

    if (isMobile) return (
        <TrackCardMobile
            author={track.owners[0].name}
            author_href={'/users/'+ track.owners[0].adress}
            duration={track.duration}
            id={track.id}
            image_src={track.picture_source.square_small}
            isPaused={isPaused}
            isSelected={selectedTrackId === track.id}
            onToggleTrack={onToggleTrack}
            primary_name={track.name}
            track_href={'/tracks/' + track.id}
            track_src={backendUrl + '/' + track.audio_src}
            secondary_name={track.name_secondary}
            width={width}
            showIsDeleted={showIsDeleted}
        />
    )


    return (
        <TrackCardDesktop
            author={track.owners[0].name}
            author_href={'/users/'+ track.owners[0].adress}
            duration={track.duration}
            id={track.id}
            image_src={track.picture_source.square_small}
            isPaused={isPaused}
            isSelected={selectedTrackId === track.id}
            onToggleTrack={onToggleTrack}
            primary_name={track.name}
            track_href={'/tracks/' + track.id}
            track_src={backendUrl + '/' + track.audio_src}
            secondary_name={track.name_secondary}
            width={width}
            showIsDeleted={showIsDeleted}
            activeInMenu={activeInMenu}
        />
    )
};