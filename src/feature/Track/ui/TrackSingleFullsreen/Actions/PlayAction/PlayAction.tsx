'use client'
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getIsPaused, getSelectedTrackId, playerActions } from '@/entity/player';
import { Track } from '@/entity/track';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Button } from '@/shared/ui/Button';
import IconPlay from '@/shared/assets/svg/Play.svg'
import IconPause from '@/shared/assets/svg/Pause.svg'

interface IPlayActionProps {
  track: Track
}

export const PlayAction: React.FunctionComponent<IPlayActionProps> = ({
    track,
}) => {

    const selectedTrackId = useSelector(getSelectedTrackId)
    const isPaused = useSelector(getIsPaused)
    const dispatch = useAppDispatch()

    const onToggleTrack = useCallback(() => {
        if (track.id === selectedTrackId) {
            return dispatch(playerActions.togglePause())
        } 
        dispatch(playerActions.overwriteList({
            list: [track],
            startsWithId: track.id
        }))
    }, [dispatch, track, selectedTrackId])


    const text = selectedTrackId === track.id 
        ? (isPaused ? 'Слушать' : 'Пауза') 
        : 'Слушать'

    return (
        <Button
            addonLeft={selectedTrackId === track.id ? (isPaused ? <IconPlay/> : <IconPause/>) : <IconPlay/>}
            onClick={onToggleTrack}

        >
            {text}
        </Button>
    );

};
