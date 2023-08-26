import { StateSchema } from '@/global/providers/StoreProvider';

export const getIsNameValidationError = (state: StateSchema): boolean => {
    const errors = state.addNewTrack.validationErrors.name

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