import { StateSchema } from '@/global/providers/StoreProvider';
import { checkError } from '@/shared/lib/helpers/checkError/checkError';

export const getIsImageSquareFileValidationError = (state: StateSchema): boolean => {
    const errors = state?.addNewTrackSeparateImageLoading?.validationErrors.imageSquareFile
    return checkError(errors)
    
}