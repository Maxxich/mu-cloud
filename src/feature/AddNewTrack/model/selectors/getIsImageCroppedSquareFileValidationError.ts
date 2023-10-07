import { StateSchema } from '@/global/providers/StoreProvider';
import { checkError } from '@/shared/lib/checkError/checkError';

export const getIsImageCroppedSquareFileValidationError = (state: StateSchema): boolean => {
    const errors = state?.addNewTrack?.validationErrors.imageCroppedSquareFile
    return checkError(errors)
}