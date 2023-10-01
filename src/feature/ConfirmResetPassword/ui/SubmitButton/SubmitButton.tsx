import { useSelector } from 'react-redux';
import { SyntheticEvent, useCallback, useEffect } from 'react';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { getStatus } from '../../model/selectors/getStatus'
import { getValidationError } from '../../model/selectors/getValidationError';
import { confirm } from '../../model/services/confirm';
import { useRouter } from 'next/navigation';

export const SubmitButton: React.FunctionComponent = () => {

    const status = useSelector(getStatus)
    const validationError = useSelector(getValidationError)
    const dispatch = useAppDispatch()

    const onFormSubmit = useCallback((e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(confirm())
    }, [dispatch])

    const router = useRouter()

    useEffect(() => {
        if (status === 'success') {
            router.replace('/signin')
        }
    }, [status])

    return (
        <Button 
            variant='green' 
            fullwidth 
            disabled={status === 'loading' || Boolean(validationError)}    
            onClick={onFormSubmit}
        >
            {status === 'loading'
                ? 'Загрузка...'
                : 'Сохранить'
            }
        </Button>
    );
};