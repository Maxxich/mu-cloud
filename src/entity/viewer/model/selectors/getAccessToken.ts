import { StateSchema } from '@/global/providers/StoreProvider'

export const getAccessToken = (state: StateSchema) => state.viewer.access_token