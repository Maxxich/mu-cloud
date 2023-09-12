import { ChangeEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Input } from '@/shared/ui/Input/Input';
import { setPasswordConfirm } from '../../model/services/setPasswordConfirm';
import { getPasswordConfirm } from '../../model/selectors/fieldSelectors';
import { getIsPasswordConfirmValidationError } from '../../model/services/getIsPasswordConfirmValidationError';

interface IProps {
    className?: string
}

export const PasswordConfirmInput: React.FunctionComponent<IProps> = ({
    className
}) => {

    const passwordConfirm = useSelector(getPasswordConfirm)
    const dispatch = useAppDispatch()
    const isError = useSelector(getIsPasswordConfirmValidationError)

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
        />
    );
};
