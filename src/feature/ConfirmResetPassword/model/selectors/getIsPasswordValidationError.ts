import { StateSchema } from '@/global/providers/StoreProvider';
import { checkError } from '@/shared/lib/helpers/checkError/checkError';

export const getIsPasswordValidationError = (state: StateSchema): boolean => {
    const errors = state?.confirmResetPassword?.validationErrors.password
    return checkError(errors)
}