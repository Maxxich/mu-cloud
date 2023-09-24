'use client'
import { ChangeEvent, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Input } from '@/shared/ui/Input/Input'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { getName } from '../../model/selectors/getName'
import { getStatus } from '../../model/selectors/getStatus'
import { getIsNameValidationError } from '../../model/selectors/getIsNameValidationError'
import { setAndValidateName } from '../../model/services/setAndValidateName'


export const Name: React.FunctionComponent = () => {

    const name = useSelector(getName)
    const status = useSelector(getStatus)
    const isError = useSelector(getIsNameValidationError)

    const dispatch = useAppDispatch()

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setAndValidateName(e.target.value))
    }, [dispatch])
    
    return (
        <Input
            label='Изменить имя'
            placeholder='Имя...'
            onChange={onChange}
            value={name}
            disabled={['idle', 'loading'].includes(status || '')}
            isError={isError}
        />
    )
}