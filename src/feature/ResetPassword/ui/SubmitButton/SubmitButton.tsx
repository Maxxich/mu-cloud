import { useSelector } from 'react-redux';
import { SyntheticEvent, useCallback } from 'react';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { getStatus } from '../../model/selectors/getStatus'
import { reset } from '../../model/services/reset';

export const SubmitButton: React.FunctionComponent = () => {

    const status = useSelector(getStatus)
    const dispatch = useAppDispatch()

    const onFormSubmit = useCallback((e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(reset())
    }, [dispatch])

    return (
        <Button 
            variant='green' 
            fullwidth 
            disabled={status === 'loading'}    
            onClick={onFormSubmit}
        >
            {status === 'loading'
                ? 'Загрузка...'
                : 'Сбросить'
            }
        </Button>
    );
};