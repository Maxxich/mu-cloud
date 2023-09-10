'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { checkAuth } from '../model/services/checkAuth'

export const useCheckIsAuthOnRefresh = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(checkAuth())
    }, [dispatch])
}