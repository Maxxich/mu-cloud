import { StateSchema } from '@/global/providers/StoreProvider';
import { config } from '../config/config';

export const getValidationError = (state: StateSchema): string | undefined => {

    const validationErrors = state?.signup?.validationErrors

    if (!validationErrors) return undefined
    
    const entries = Object.entries(validationErrors)
    let error = undefined


    for (let entry in entries) {
        const [fieldKey, errors]: [string, Record<string, boolean>] = entries[entry]
        const entries2 = Object.entries(errors)
        for (let entry2 in entries2) {
            const [errorKey, flag]: [string, boolean] = entries2[entry2]
            if (flag) {
                // @ts-ignore
                error = config[fieldKey].messages[errorKey]
            }
            if (error) break
        }
        if (error) break
    }

    return error
}