import { useSelector } from 'react-redux';
import { useCallback, memo, ChangeEvent } from 'react'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Input } from '@/shared/ui/Input';
import { getNameSecondary } from '../../../model/selectors/getNameSecondary';
import { getIsNameSecondaryValidationError } from '../../../model/selectors/getIsNameSecondaryValidationError';
import { getStatus } from '../../../model/selectors/getStatus';
import { setNameSecondary } from '../../../model/services/setNameSecondary';

interface INameSecondaryInputProps {
}

export const NameSecondaryInput: React.FunctionComponent<INameSecondaryInputProps> = memo((props) => {

    const dispatch = useAppDispatch()
    const nameSecondary = useSelector(getNameSecondary)
    const status = useSelector(getStatus)
    const isError = useSelector(getIsNameSecondaryValidationError)

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNameSecondary(e.target.value))
    }, [dispatch])


    return (
        <Input
            value={nameSecondary}
            onChange={onChange}
            isError={isError}
            disabled={status === 'loading'}
            label='Дополнительная подпись'
        />
    );
})

NameSecondaryInput.displayName = 'NameSecondaryInput'