import { StateSchema } from '@/global/providers/StoreProvider';
import { checkError } from '@/shared/lib/checkError/checkError';

export const getIsImageCroppedWideFileValidationError = (state: StateSchema): boolean => {
    const errors = state?.addNewTrack?.validationErrors.imageCroppedWideFile
    return checkError(errors) 
}