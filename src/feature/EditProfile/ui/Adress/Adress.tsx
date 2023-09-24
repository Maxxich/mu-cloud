'use client'
import { ChangeEvent, useCallback } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { Input } from '@/shared/ui/Input/Input'
import cls from './Adress.module.scss'
import { getAdress } from '../../model/selectors/getAdress'
import { getStatus } from '../../model/selectors/getStatus'
import { getIsAdressValidationError } from '../../model/selectors/getIsAdressValidationError'
import { setAndValidateAdress } from '../../model/services/setAndValidateAdress'


export const Adress: React.FunctionComponent = () => {

    const adress = useSelector(getAdress)
    const status = useSelector(getStatus)
    const isError = useSelector(getIsAdressValidationError)

    const dispatch = useAppDispatch()

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setAndValidateAdress(e.target.value))
    }, [dispatch])

    const addonLeft = <span className={classNames(cls.addon,
        {
            [cls.danger]: isError
        }
    )}>
        @
    </span>
    
    return (
        <Input
            label='Изменить адрес'
            placeholder='Адрес...'
            onChange={onChange}
            value={adress}
            className={cls.marginBottom}
            addonLeft={addonLeft}
            disabled={['idle', 'loading'].includes(status || '')}
            isError={isError}
        />
    )
}