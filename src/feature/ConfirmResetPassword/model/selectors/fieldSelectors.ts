import { StateSchema } from '@/global/providers/StoreProvider'


export const getPassword = (state: StateSchema) => state?.confirmResetPassword?.password

export const getPasswordConfirm = (state: StateSchema) => state?.confirmResetPassword?.passwordConfirm

