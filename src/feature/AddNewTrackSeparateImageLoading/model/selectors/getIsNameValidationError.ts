import { StateSchema } from '@/global/providers/StoreProvider';
import { checkError } from '@/shared/lib/checkError/checkError';

export const getIsNameValidationError = (state: StateSchema): boolean => {
    const errors = state?.addNewTrackSeparateImageLoading?.validationErrors.name
    return checkError(errors) 
}