import { StateSchema } from '@/global/providers/StoreProvider';

export const getSelectedTrackId = (state: StateSchema) => state.player?.currentTrackId