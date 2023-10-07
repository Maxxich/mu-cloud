import { StateSchema } from '@/global/providers/StoreProvider';
import { checkError } from '@/shared/lib/checkError/checkError';

export const getIsPasswordConfirmValidationError = (state: StateSchema): boolean => {
    const errors = state?.signup?.validationErrors.passwordConfirm
    return checkError(errors) 
}