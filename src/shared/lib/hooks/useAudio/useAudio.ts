import { useContext } from 'react'
import { AudioContext } from '@/global/providers/AudioProvider'

export const useAudio = () => {
    return useContext(AudioContext)
}