import { ChangeEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Input } from '@/shared/ui/Input';
import { getEmail } from '../../model/selectors/getEmail';
import { ResetPasswordActions } from '../../model/slices/ResetPasswordSlice';
import { getStatus } from '../../model/selectors/getStatus';

export const EmailInput: React.FunctionComponent = ({
    className
} : {
    className?: string
}) => {

    const email = useSelector(getEmail)
    const status = useSelector(getStatus)
    const dispatch = useAppDispatch()

    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(ResetPasswordActions.setEmail(e.target.value))
    }, [dispatch])
  
    return (
        <Input
            label='Email'
            value={email}
            onChange={onChangeEmail}
            disabled={status === 'loading'}
            className={className}
        />
    );
};
