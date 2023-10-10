import { ChangeEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Input } from '@/shared/ui/Input';
import { setName } from '../../model/services/setName';
import { getIsNameValidationError } from '../../model/services/getIsNameValidationError';
import { getName } from '../../model/selectors/fieldSelectors';

export const NameInput: React.FunctionComponent = (props) => {

    const name = useSelector(getName)
    const dispatch = useAppDispatch()
    const isError = useSelector(getIsNameValidationError)

    const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(e.target.value))
    }, [dispatch])
  
    return (
        <Input
            label='Имя'
            value={name}
            onChange={onChangeName}
            isError={isError}
        />
    );
};
