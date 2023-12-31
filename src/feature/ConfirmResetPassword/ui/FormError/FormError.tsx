import { useSelector } from 'react-redux'
import { Form } from '@/shared/ui/Form';
import { getRequestErrorMessage } from '../../model/selectors/getRequestErrorMessage';
import { getValidationError } from '../../model/selectors/getValidationError';

interface IFormErrorProps {
}

export const FormError: React.FunctionComponent<IFormErrorProps> = (props) => {
    const requestErrorMessage = useSelector(getRequestErrorMessage)
    const validationError = useSelector(getValidationError)
    
    if (!requestErrorMessage && !validationError) return

    return (
        <Form.Box margin='auto'>{validationError || requestErrorMessage}</Form.Box>
    );
};
