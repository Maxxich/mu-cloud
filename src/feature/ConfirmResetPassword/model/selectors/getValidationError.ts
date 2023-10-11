import { StateSchema } from '@/global/providers/StoreProvider';
import { getFieldValidationErrorMessage } from '@/shared/lib/helpers/getFieldValidationErrorMessage/getFieldValidationErrorMessage';
import { config } from '../config/config';

export const getValidationError = (state: StateSchema): string | undefined => {

    const validationErrors = state?.confirmResetPassword?.validationErrors
    return getFieldValidationErrorMessage(validationErrors, config)
}