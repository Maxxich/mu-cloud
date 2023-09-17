import { backendUrl } from '@/shared/const/backendUrl'
import { Track } from '../model/types/track'

type ReturnImages = Track['picture_source']

export const createTrackImagesSrc = (track: Track): ReturnImages => {
    return {
        square: backendUrl + '/' + track.picture_source.square,
        square_medium: backendUrl + '/' + track.picture_source.square_medium,
        square_small: backendUrl + '/' + track.picture_source.square_small,
        wide: backendUrl + '/' + track.picture_source.wide,
    }
}