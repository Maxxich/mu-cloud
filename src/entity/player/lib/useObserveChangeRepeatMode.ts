'use client'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { useAudio } from '@/shared/lib/useAudio/useAudio'
import { getRepeatTrackMode } from '../model/selectors/getRepeatTrackMode/getRepeatTrackMode'
import { playerActions } from '../model/slices/playerSlice'

export const useObserveChangeRepeatMode = () => {

  const audio = useAudio()
  const repeatTrackMode = useSelector(getRepeatTrackMode)
  const dispatch = useAppDispatch()

  useEffect(() => {
    audio.onended = (e: any) => {
      if (repeatTrackMode) return audio.play()
      dispatch(playerActions.setNextTrack())
    }
    return () => {
      audio.onended = null
    }
  }, [repeatTrackMode, dispatch, audio])
}