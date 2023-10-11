import { StateSchema } from '@/global/providers/StoreProvider';
import { checkError } from '@/shared/lib/helpers/checkError/checkError';

export const getIsNameSecondaryValidationError = (state: StateSchema): boolean => {
    const errors = state?.addNewTrackSeparateImageLoading?.validationErrors.name_secondary
    return checkError(errors) 
}