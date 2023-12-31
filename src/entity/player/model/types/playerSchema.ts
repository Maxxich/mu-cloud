import { Track } from '@/entity/track'

export interface PlayerSchema {
    isPaused: boolean,
    isAudioExist: boolean
    repeatTrackMode: boolean
    isOpened: boolean
    list: Track[] 
    currentTrackId: number | undefined
    currentTrackTimeLenght: number 
    currentTrackTime: number 
    interfaceHidden: boolean
    showPlaylist: boolean
    isSmallPictureActive: boolean
    loadedPercentage: number
    persistedTime: number | undefined
}