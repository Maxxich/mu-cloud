import { ChangeEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Input } from '@/shared/ui/Input/Input';
import { setPasswordConfirm } from '../../model/selectors/setPasswordConfirm';
import { getPasswordConfirm } from '../../model/selectors/fieldSelectors';
import { getIsPasswordConfirmValidationError } from '../../model/selectors/getIsPasswordConfirmValidationError';
import { getStatus } from '../../model/selectors/getStatus';

interface IProps {
    className?: string
}

export const PasswordConfirmInput: React.FunctionComponent<IProps> = ({
    className
}) => {

    const passwordConfirm = useSelector(getPasswordConfirm)
    const dispatch = useAppDispatch()
    const isError = useSelector(getIsPasswordConfirmValidationError)
    const status = useSelector(getStatus)

    const onChangePasswordConfirm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPasswordConfirm(e.target.value))
    }, [dispatch])
  
    return (
        <Input
            label='Подтверждение пароля'
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
            isError={isError}
            type='password'
            className={className}
            disabled={status === 'loading'}
        />
    );
};
