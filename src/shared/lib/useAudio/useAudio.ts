import { AudioContext } from '@/global/providers/AudioProvider'
import { useContext } from 'react'

export const useAudio = () => {
    return useContext(AudioContext)
}