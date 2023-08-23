import { StateSchema } from '@/global/providers/StoreProvider';

export const getSelectedTrack = (state: StateSchema) => {
    const id = state.player.currentTrackId
    const list = state.player.list
    const track = list.find(t => t.id === id)
    return track
}