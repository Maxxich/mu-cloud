import { Form } from '@/shared/ui/Form/Form';
import { getValidationError } from '../../../model/selectors/getValidationError';
import { useSelector } from 'react-redux'

interface IFormErrorProps {
}

export const FormError: React.FunctionComponent<IFormErrorProps> = (props) => {
    const error = useSelector(getValidationError)
    
    if (!error) return

  return (
    <Form.Error margin='auto'>{error}</Form.Error>
  );
};
