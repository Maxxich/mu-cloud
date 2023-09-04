import { StateSchema } from '@/global/providers/StoreProvider'

export const getRequestErrorMessage = (state: StateSchema) => state?.signup?.requestError