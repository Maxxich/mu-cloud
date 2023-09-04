import { getErrorMessage } from '../../../model/selectors/getErrorMessage';
import { Form } from '@/shared/ui/Form/Form';
import { useSelector } from 'react-redux'

interface IFormErrorProps {
}

export const FormError: React.FunctionComponent<IFormErrorProps> = (props) => {
    const errorMessage = useSelector(getErrorMessage)
    
    if (!errorMessage) return

  return (
    <Form.Box margin='auto'>{errorMessage}</Form.Box>
  );
};
