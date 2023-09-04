import { Button } from '@/shared/ui/Button/Button';
import { getStatus } from '../../model/selectors/getStatus'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { SyntheticEvent, useCallback } from 'react';
import { signUpByEmail } from '../../model/services/signUp';
import { getValidationError } from '../../model/selectors/getValidationError';

export const SubmitButton: React.FunctionComponent = () => {

    const status = useSelector(getStatus)
    const validationError = useSelector(getValidationError)
    const dispatch = useAppDispatch()

    const onFormSubmit = useCallback((e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(signUpByEmail())
    }, [dispatch])

  return (
    <Button 
        variant='green' 
        fullwidth 
        disabled={status === 'loading' || Boolean(validationError)}    
        onClick={onFormSubmit}
    >
        {status === 'loading'
            ? 'Загрузка...'
            : 'Зарегистрироваться'
        }
    </Button>
  );
};