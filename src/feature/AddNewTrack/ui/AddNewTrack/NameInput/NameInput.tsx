import { useSelector } from 'react-redux';
import { useCallback, memo, ChangeEvent } from 'react'
import { getName } from '@/feature/AddNewTrack/model/selectors/getName';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Input } from '@/shared/ui/Input/Input';
import { getIsNameValidationError } from '../../../model/selectors/getIsNameValidationError';
import { getStatus } from '../../../model/selectors/getStatus';
import { setName } from '../../../model/services/setName';

interface INameInputProps {
}

export const NameInput: React.FunctionComponent<INameInputProps> = memo((props) => {

    const dispatch = useAppDispatch()
    const name = useSelector(getName)
    const status = useSelector(getStatus)
    const isError = useSelector(getIsNameValidationError)

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(e.target.value))
    }, [dispatch])

    return (
        <Input
            value={name}
            onChange={onChange}
            label='Название'
            disabled={status === 'loading'}
            isError={isError}
        />
    );
})

NameInput.displayName = 'NameInput'