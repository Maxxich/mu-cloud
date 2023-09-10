'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { useAudio } from '@/shared/lib/useAudio/useAudio'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { getIsPaused } from '../model/selectors/getIsPaused/getIsPaused'
import { playerActions } from '../model/slices/playerSlice'

export const useObserveTogglePause = () => {
  const isPaused = useSelector(getIsPaused)
  const audio = useAudio()
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (!audio) return 
    if (isPaused) {
      audio.pause()
    } else {
      audio.play()     
        .then(_ => {})
        .catch(error => {})
    }
  }, [isPaused, audio])

  React.useEffect(() => {
    const stop = () => {
      dispatch(playerActions.stopAudio())
    }
    const play = () => {
      dispatch(playerActions.playAudio())
    }
    audio.addEventListener('pause', stop)
    audio.addEventListener('play', play)
    return () => {
      audio.removeEventListener('pause', stop)
      audio.removeEventListener('play', play)
    }
  }, [audio, dispatch])
}