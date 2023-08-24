'use client'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { useAudio } from '@/shared/lib/useAudio/useAudio'
import { useEffect } from 'react'
import { playerActions } from '../model/slices/playerSlice'

export const useObserverChangeCurrentTime = () => {

    
  const dispatch = useAppDispatch()
  const audio = useAudio()

  useEffect(() => {
    audio.ontimeupdate = (e: any) => {
      dispatch(playerActions.overwriteCurrentTrackTime(e.target.currentTime))
    }
    return () => {
      audio.ontimeupdate = null
      dispatch(playerActions.stopAudio())
      audio.src = ''
    }
  }, [audio, dispatch])
}