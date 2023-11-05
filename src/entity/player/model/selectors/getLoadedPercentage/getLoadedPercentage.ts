import { StateSchema } from '@/global/providers/StoreProvider'

export const getLoadedPercentage = (state: StateSchema) => state.player?.loadedPercentage