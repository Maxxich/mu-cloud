'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { playerActions } from '../model/slices/playerSlice'

export const useAutoClosingPlayerOnChangeLocation = () => {

    const pathname = usePathname()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(playerActions.closePlayer())
        dispatch(playerActions.closeShowPlaylist())
    }, [pathname, dispatch])
}