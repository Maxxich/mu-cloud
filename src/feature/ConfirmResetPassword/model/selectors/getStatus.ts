import { StateSchema } from '@/global/providers/StoreProvider'

export const getStatus = (state: StateSchema) => state?.confirmResetPassword?.status