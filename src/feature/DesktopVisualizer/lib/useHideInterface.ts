import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getPlaylistOpened, playerActions } from '@/entity/player'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'

export const useHideInterface = () => {

    const dispatch = useAppDispatch()
    const timerRef = useRef<any>()
    const playlistOpened = useSelector(getPlaylistOpened)

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (playlistOpened) return
            dispatch(playerActions.setInterfaceHidden(true))
        }, 2500)
        timerRef.current = timerId
        const handleMousemove = () => {
            clearTimeout(timerRef.current)
            dispatch(playerActions.setInterfaceHidden(false))
            const timerId = setTimeout(() => {
                if (playlistOpened) return
                dispatch(playerActions.setInterfaceHidden(true))
            }, 2500)
            timerRef.current = timerId
        }
        window.addEventListener('mousemove', handleMousemove)
        document.body.style.scrollbarGutter = 'auto';
        (document.documentElement as any).style.scrollbarGutter = 'auto';
        return () => {
            document.body.style.scrollbarGutter = 'stable';
            (document.documentElement as any).style.scrollbarGutter = 'stable';
            window.removeEventListener('mousemove', handleMousemove)
            if (!timerRef?.current) return
            clearTimeout(timerRef.current)
        }
    })
}