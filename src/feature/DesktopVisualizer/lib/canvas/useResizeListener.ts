import { useCallback, MutableRefObject, useEffect } from 'react'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { useAudio } from '@/shared/lib/hooks/useAudio/useAudio'
import { processKeystroke } from '../utils'

export const useResizeListener = ({
    ref,
    startTick,
    animationIdRef
} : {
    ref: MutableRefObject<HTMLCanvasElement | undefined>
    startTick: () => void
    animationIdRef: MutableRefObject<number | undefined>
}) => {

    const audio = useAudio()
    const dispatch = useAppDispatch()

    const resizeHandler = useCallback(() => {
        if (!ref?.current) return
        ref.current.height = window.innerHeight
        ref.current.width = window.innerWidth
        startTick()
    }, [startTick, ref])

    useEffect(() => {
        resizeHandler()
    }, [resizeHandler])

    useEffect(() => {
        startTick()
        const handleKeydown = (e: KeyboardEvent) => {
            processKeystroke(e, audio, dispatch)
        }
        window.addEventListener('resize', resizeHandler)
        window.addEventListener('keydown', handleKeydown);
        return () => {
            //eslint-disable-next-line
            if (animationIdRef?.current) cancelAnimationFrame(animationIdRef.current) 
            window.removeEventListener('resize', resizeHandler)
            window.removeEventListener('keydown',handleKeydown);
        }
    }, [audio, resizeHandler, startTick, dispatch, animationIdRef])
}