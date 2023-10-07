import { StateSchema } from '@/global/providers/StoreProvider';

export const getIsImageCroppedWideFileValidationError = (state: StateSchema): boolean => {
    const errors = state?.addNewTrackSeparateImageLoading?.validationErrors.imageCroppedWideFile

    if (!errors) return false

    const entries = Object.entries(errors)

    if (!errors) return false

    for (let entry in entries) {
        const [errorKey, flag]: [string, boolean] = entries[entry]
        if (flag) {
            // @ts-ignore
            return true
        }
    }

    return false
    
}