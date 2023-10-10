import { ChangeEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Input } from '@/shared/ui/Input';
import { setPassword } from '../../model/selectors/setPassword';
import { getIsPasswordValidationError } from '../../model/selectors/getIsPasswordValidationError';
import { getPassword } from '../../model/selectors/fieldSelectors';
import { getStatus } from '../../model/selectors/getStatus';

export const PasswordInput: React.FunctionComponent = (props) => {

    const password = useSelector(getPassword)
    const dispatch = useAppDispatch()
    const isError = useSelector(getIsPasswordValidationError)
    const status = useSelector(getStatus)

    const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(e.target.value))
    }, [dispatch])
  
    return (
        <Input
            label='Пароль'
            value={password}
            type='password'
            onChange={onChangePassword}
            isError={isError}
            disabled={status === 'loading'}
        />
    );
};
