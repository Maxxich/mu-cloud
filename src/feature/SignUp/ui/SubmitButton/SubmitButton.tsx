import { useSelector } from 'react-redux';
import { SyntheticEvent, useCallback } from 'react';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { getStatus } from '../../model/selectors/getStatus'
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