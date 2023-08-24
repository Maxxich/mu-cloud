'use client'
import { useEffect } from 'react'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { useAudio } from '@/shared/lib/useAudio/useAudio'
import { useSelector } from 'react-redux'
import { playerActions } from '../model/slices/playerSlice'
import { getSelectedTrack } from '../model/selectors/getSelectedTrack'

// useEffect(() => {
//     audio.src = 'http://localhost:5001/' + selectedTrack.audio_src
//     console.log(audio)
//     audio.play()
// }, [selectedTrack, audio])



export const useObserveChangeCurrentTrack = () => {

  const dispatch = useAppDispatch()
  const audio = useAudio()
  const selectedTrack = useSelector(getSelectedTrack)

  useEffect(() => {
    if (!selectedTrack) {
        audio.pause()
        audio.src = ''
        return 
    }
    
    const audioSource = 'http://localhost:5001/' + selectedTrack.audio_src
    audio.src = audioSource

    navigator.mediaSession.metadata = new MediaMetadata({
      title: selectedTrack.name + ' ' + selectedTrack.name_secondary,
      artist: selectedTrack.owners[0].name,
      artwork: [
        { src: 'http://localhost:5001/' + selectedTrack.picture_source.square,   sizes: '100x100',   type: 'image/png' },
      //   { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
      //   { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
      //   { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
      //   { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
        { src:  'http://localhost:5001/' + selectedTrack.picture_source.square,   sizes: '800x800', type: 'image/png' },
      ]
    });

    navigator.mediaSession.setActionHandler('nexttrack', () => dispatch(playerActions.setNextTrack()))
    navigator.mediaSession.setActionHandler('previoustrack', () => dispatch(playerActions.setPreviusTrack()))

    audio.onloadeddata = () => {
      fetch('http://localhost:5001/' + `tracks/register-listening/${selectedTrack.id}`)
      if (!audio) return
      dispatch(playerActions.overwriteCurrentTrackTimeLenght(audio.duration))
      audio.play()

    }
  }, [selectedTrack, audio, dispatch])

}