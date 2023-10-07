import { StateSchema } from '@/global/providers/StoreProvider'

export const getStatus = (state: StateSchema) => state.addNewTrackSeparateImageLoading?.status