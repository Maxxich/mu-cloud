'use client'


import { SyntheticEvent, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@/shared/ui/Button/Button'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { useFile } from '@/entity/fileStorage'
import { getIsProfileDataChanged } from '../../model/selectors/getIsProfileDataChanged'
import { getIsError } from '../../model/selectors/getIsError'
import { save } from '../../model/services/save'
import { FilesContext } from '../../model/fileStorage/FilesContext'
import { FormDataEntries } from '../../model/fileStorage/types'

export const SaveButton: React.FunctionComponent = () => {

    const isChanged = useSelector(getIsProfileDataChanged)
    const isError = useSelector(getIsError)
    const dispatch = useAppDispatch()
    const {
        getFile: getCropped
    } = useFile({
        context: FilesContext,
        formDataEntryName: FormDataEntries.CROPPED
    })

    const disabled = isError
        ? true
        : (
            isChanged
                ? false
                : true
        )

    const onSave = useCallback((e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(save({
            croppedAvatar: getCropped()
        }))
    }, [dispatch, getCropped])

    return (
        <Button
            variant='green'
            size='m'
            onClick={onSave}
            disabled={disabled}
        >
            Сохранить
        </Button>
    )
}