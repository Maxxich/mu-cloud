import { StateSchema } from '@/global/providers/StoreProvider'

export const getEmail = (state: StateSchema) => state?.signup?.email

export const getPassword = (state: StateSchema) => state?.signup?.password

export const getPasswordConfirm = (state: StateSchema) => state?.signup?.passwordConfirm

export const getName = (state: StateSchema) => state?.signup?.name
