import { StateSchema } from '@/global/providers/StoreProvider';
import { checkError } from '@/shared/lib/helpers/checkError/checkError';

export const getIsImageCroppedSquareFileValidationError = (state: StateSchema): boolean => {
    const errors = state?.addNewTrackSeparateImageLoading?.validationErrors.imageCroppedSquareFile
    return checkError(errors) 
}