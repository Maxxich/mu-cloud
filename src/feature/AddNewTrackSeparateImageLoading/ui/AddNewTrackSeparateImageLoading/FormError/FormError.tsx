import { useSelector } from 'react-redux'
import { Form } from '@/shared/ui/Form';
import { getValidationError } from '../../../model/selectors/getValidationError';

interface IFormErrorProps {
}

export const FormError: React.FunctionComponent<IFormErrorProps> = (props) => {
    const error = useSelector(getValidationError)
    
    if (!error) return

    return (
        <Form.Box margin='auto'>{error}</Form.Box>
    );
};
