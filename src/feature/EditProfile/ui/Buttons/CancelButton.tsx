'use client'


import { useCallback } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { EditProfileActions } from '../../model/slices/EditProfileSlice'

export const CancelButton: React.FunctionComponent = () => {

    const dispatch = useAppDispatch()

    const onReset = useCallback(() => {
        dispatch(EditProfileActions.cancelEdit())
    }, [dispatch])

    return (
        <Button
            variant='danger'
            size='m'
            onClick={onReset}
        >
            Отменить
        </Button>
    )
}