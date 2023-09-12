import { ChangeEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Input } from '@/shared/ui/Input/Input';
import { setEmail } from '../../model/services/setEmail';
import { getIsEmailValidationError } from '../../model/services/getIsEmailValidationError';
import { getEmail } from '../../model/selectors/fieldSelectors';

export const EmailInput: React.FunctionComponent = (props) => {

    const email = useSelector(getEmail)
    const dispatch = useAppDispatch()
    const isError = useSelector(getIsEmailValidationError)

    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.target.value))
    }, [dispatch])
  
    return (
        <Input
            label='Email'
            value={email}
            onChange={onChangeEmail}
            isError={isError}
        />
    );
};
