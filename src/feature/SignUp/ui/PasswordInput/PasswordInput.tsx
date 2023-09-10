import { ChangeEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Input } from '@/shared/ui/Input/Input';
import { setPassword } from '../../model/services/setPassword';
import { getIsPasswordValidationError } from '../../model/services/getIsPasswordValidationError';
import { getPassword } from '../../model/selectors/fieldSelectors';

export const PasswordInput: React.FunctionComponent = (props) => {

  const password = useSelector(getPassword)
  const dispatch = useAppDispatch()
  const isError = useSelector(getIsPasswordValidationError)

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
    />
  );
};
