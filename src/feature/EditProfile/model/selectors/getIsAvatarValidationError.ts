import { StateSchema } from '@/global/providers/StoreProvider';
import { checkError } from '@/shared/lib/helpers/checkError/checkError';

export const getIsAvatarValidationError = (state: StateSchema): boolean => {
    const errors = {
        ...state?.EditProfile?.validationErrors.avatarCropped,
        ...state?.EditProfile?.validationErrors.uploadedAvatarMimeType
    }
    return checkError(errors) 
    
}