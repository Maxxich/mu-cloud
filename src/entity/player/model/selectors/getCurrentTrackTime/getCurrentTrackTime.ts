import { StateSchema } from '@/global/providers/StoreProvider'

export const getCurrentTrackTime = (state: StateSchema) => state.player?.currentTrackTime