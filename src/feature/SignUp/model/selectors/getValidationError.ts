import { StateSchema } from '@/global/providers/StoreProvider';
import { getFieldValidationErrorMessage } from '@/shared/lib/getFieldValidationErrorMessage/getFieldValidationErrorMessage';
import { config } from '../config/config';

export const getValidationError = (state: StateSchema): string | undefined => {

    const validationErrors = state?.signup?.validationErrors
    return getFieldValidationErrorMessage(validationErrors, config)
}