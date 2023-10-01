import { useSelector } from 'react-redux'
import { Form } from '@/shared/ui/Form/Form';
import { getError } from '../../model/selectors/getError';

interface IFormErrorProps {
}

export const FormError: React.FunctionComponent<IFormErrorProps> = (props) => {
    const errorMessage = useSelector(getError)
    
    if (!errorMessage) return null

    return (
        <Form.Box margin='auto'>{errorMessage}</Form.Box>
    );
};
