import { StateSchema } from '@/global/providers/StoreProvider'

export const getIsPaused = (state: StateSchema) => state.player.isPaused