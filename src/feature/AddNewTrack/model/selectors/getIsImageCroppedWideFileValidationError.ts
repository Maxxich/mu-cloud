import { StateSchema } from '@/global/providers/StoreProvider';

export const getIsImageCroppedWideFileValidationError = (state: StateSchema): boolean => {
    const errors = state.addNewTrack.validationErrors.imageCroppedWideFile

    const entries = Object.entries(errors)

    for (let entry in entries) {
        const [errorKey, flag]: [string, boolean] = entries[entry]
        if (flag) {
            // @ts-ignore
            return true
        }
    }

    return false
    
}