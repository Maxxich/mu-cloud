import { useSelector } from 'react-redux';
import { useCallback, memo, ChangeEvent } from 'react'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Input } from '@/shared/ui/Input';
import { getStatus } from '../../../model/selectors/getStatus';
import { getIsUploadCodeValidationError } from '../../../model/selectors/getIsUploadCodeValidationError';
import { getUploadCode } from '../../../model/selectors/getUploadCode';
import { setUploadCode } from '../../../model/services/setUploadCode';

interface IUploadCodeInputProps {
    className: string
}

export const UploadCodeInput: React.FunctionComponent<IUploadCodeInputProps> = memo(({
    className
}) => {

    const dispatch = useAppDispatch()
    const name = useSelector(getUploadCode)
    const status = useSelector(getStatus)
    const isError = useSelector(getIsUploadCodeValidationError)

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUploadCode(e.target.value))
    }, [dispatch])

    return (
        <Input
            value={name}
            onChange={onChange}
            label='Код загрузки'
            disabled={status === 'loading'}
            isError={isError}
            className={className}
        />
    );
})

UploadCodeInput.displayName = 'UploadCodeInput'