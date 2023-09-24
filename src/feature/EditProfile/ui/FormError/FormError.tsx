import { useSelector } from 'react-redux'
import { Form } from '@/shared/ui/Form/Form';
import { getValidationError } from '../../model/selectors/getValidationError';
import { getRequestError } from '../../model/selectors/getRequestError';

interface IFormErrorProps {
}

export const FormError: React.FunctionComponent<IFormErrorProps> = (props) => {
    const validationError = useSelector(getValidationError)
    const requestError = useSelector(getRequestError)
    
    if (!requestError && !validationError) return

    return (
        <Form.Box margin='auto'>{requestError || validationError}</Form.Box>
    );
};
