import { StateSchema } from '@/global/providers/StoreProvider'
import { getSelectedTrack } from '../getSelectedTrack/getSelectedTrack'

export const getColor = (state: StateSchema) => {
    const track = getSelectedTrack(state)
    return track?.color
}