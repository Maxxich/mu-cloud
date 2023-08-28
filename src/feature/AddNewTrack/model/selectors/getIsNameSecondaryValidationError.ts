import { StateSchema } from '@/global/providers/StoreProvider';

export const getIsNameSecondaryValidationError = (state: StateSchema): boolean => {
    const errors = state?.addNewTrack?.validationErrors.name_secondary

    if (!errors) return false

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