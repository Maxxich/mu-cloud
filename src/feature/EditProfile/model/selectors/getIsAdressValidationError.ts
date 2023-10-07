import { StateSchema } from '@/global/providers/StoreProvider';
import { checkError } from '@/shared/lib/checkError/checkError';

export const getIsAdressValidationError = (state: StateSchema): boolean => {
    const errors = state?.EditProfile?.validationErrors.adress
    return checkError(errors)  
}