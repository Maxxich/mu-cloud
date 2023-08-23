import { StateSchema } from '@/global/providers/StoreProvider'

export const getErrorMessage = (state: StateSchema) => state.signin.errorMessage