import { StateSchema } from '@/global/providers/StoreProvider'
import { getIsAdressValidationError } from './getIsAdressValidationError'
import { getIsNameValidationError } from './getIsNameValidationError'

export const getIsError = (state: StateSchema) => {
    return [
        getIsAdressValidationError(state),
        getIsNameValidationError(state)
    ].some(value => value === true)
}