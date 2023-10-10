'use client'

import { useCallback } from 'react'
import { Button } from '@/shared/ui/Button'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { EditProfileActions } from '../../model/slices/EditProfileSlice'

export const EditButton: React.FunctionComponent = () => {

    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(EditProfileActions.startEdit())
    }, [dispatch])

    return (
        <Button
            variant='default'
            size='m'
            onClick={onEdit}
        >
            Редактировать
        </Button>
    )
}