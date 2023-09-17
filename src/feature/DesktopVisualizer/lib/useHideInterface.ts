import { useEffect, useRef } from 'react'
import { playerActions } from '@/entity/player'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'

export const useHideInterface = () => {

    const dispatch = useAppDispatch()
    const timerRef = useRef<any>()

    useEffect(() => {
        const timerId = setTimeout(() => {
            dispatch(playerActions.setInterfaceHidden(true))
        }, 2500)
        timerRef.current = timerId
        const handleMousemove = () => {
            clearTimeout(timerRef.current)
            dispatch(playerActions.setInterfaceHidden(false))
            const timerId = setTimeout(() => {
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