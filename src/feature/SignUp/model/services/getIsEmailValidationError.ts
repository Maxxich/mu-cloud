import { StateSchema } from '@/global/providers/StoreProvider';
import { checkError } from '@/shared/lib/helpers/checkError/checkError';

export const getIsEmailValidationError = (state: StateSchema): boolean => {
    const errors = state?.signup?.validationErrors.email
    return checkError(errors) 
}