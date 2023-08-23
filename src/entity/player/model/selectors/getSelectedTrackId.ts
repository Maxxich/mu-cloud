import { StateSchema } from '@/global/providers/StoreProvider/StoreProvider';

export const getSelectedTrackId = (state: StateSchema) => {
    return  state.player.currentTrackId
}