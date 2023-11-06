import { StateSchema } from '@/global/providers/StoreProvider'

export const getPersistedTime = (state: StateSchema) => state.player?.persistedTime