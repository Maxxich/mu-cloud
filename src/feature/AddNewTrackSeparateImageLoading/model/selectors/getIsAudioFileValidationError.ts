import { StateSchema } from '@/global/providers/StoreProvider';
import { checkError } from '@/shared/lib/helpers/checkError/checkError';

export const getIsAudioFileValidationError = (state: StateSchema): boolean => {
    const errors = state?.addNewTrackSeparateImageLoading?.validationErrors.audioFile
    return checkError(errors) 
}