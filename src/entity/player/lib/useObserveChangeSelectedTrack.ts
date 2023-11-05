'use client'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { backendUrl } from '@/shared/const/backendUrl'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { useAudio } from '@/shared/lib/hooks/useAudio/useAudio'
import { playerActions } from '../model/slices/playerSlice'
import { getSelectedTrack } from '../model/selectors/getSelectedTrack/getSelectedTrack'

export const useObserveChangeCurrentTrack = (
    isMobile: boolean
) => {

    const dispatch = useAppDispatch()
    const audio = useAudio()
    const selectedTrack = useSelector(getSelectedTrack)

    useEffect(() => {
        if (!audio) return
        if (!selectedTrack) {
            audio.pause()
            audio.src = ''
            return 
        }
    
        const audioSource = selectedTrack.audio_src
        audio.src = audioSource

        if (!isMobile) {
            const wideImage = new Image()
            wideImage.src = selectedTrack.picture_source.wide
            wideImage.onload = () => {
                wideImage.onload = null
            }
        }
        const squareImage = new Image()
        squareImage.src = selectedTrack.picture_source.square
        squareImage.onload = () => {
            squareImage.onload = null
        }


        navigator.mediaSession.metadata = new MediaMetadata({
            title: selectedTrack.name + ' ' + selectedTrack.name_secondary,
            artist: selectedTrack.owners[0].name,
            artwork: [
                { src: selectedTrack.picture_source.square,   sizes: '100x100',   type: 'image/png' },
                { src: selectedTrack.picture_source.square,   sizes: '800x800', type: 'image/png' },
            ]
        });

        navigator.mediaSession.setActionHandler('nexttrack', () => dispatch(playerActions.setNextTrack()))
        navigator.mediaSession.setActionHandler('previoustrack', () => dispatch(playerActions.setPreviusTrack()))

        audio.onloadeddata = () => {
            fetch(backendUrl + `/tracks/register-listening/${selectedTrack.id}`)
            if (!audio) return
            dispatch(playerActions.overwriteCurrentTrackTimeLenght(audio.duration))
            audio.play()

        }
    }, [selectedTrack, audio, dispatch])

}