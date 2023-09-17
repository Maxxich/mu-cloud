import { useCallback, useEffect, useRef } from 'react'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { getIsSmallPictureActive, playerActions } from '@/entity/player'
import cls from './Canvas.module.scss'
import { createTick, processKeystroke } from '../../lib/utils'
import { useSelector } from 'react-redux'
import { useStartTick } from '../../lib/useStartTick'



interface IFunctionCanvasProps {
  audio: HTMLAudioElement 
  image: HTMLImageElement
  squareImage: HTMLImageElement
  containerRef?: React.MutableRefObject<HTMLDivElement | undefined>
  color?: string
}

export const Canvas: React.FunctionComponent<IFunctionCanvasProps> = ({
    audio,
    image,
    squareImage,
    color,
    containerRef,
}) => {

    const isSmallPictureActive = useSelector(getIsSmallPictureActive)

    
    const dispatch = useAppDispatch()
    
    const {
        startTick, ref, animationIdRef
    } = useStartTick({
        image, squareImage
    })

    const resizeHandler = useCallback(() => {
        if (!ref?.current) return
        if (containerRef?.current) {
            ref.current.height = containerRef.current.clientHeight
            ref.current.width = containerRef.current.clientHeight
        } else {
            ref.current.height = window.innerHeight
            ref.current.width = window.innerWidth
        }
        startTick()
    }, [containerRef, startTick, ref])

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
            if (animationIdRef?.current) cancelAnimationFrame(animationIdRef.current) 
            window.removeEventListener('resize', resizeHandler)
            window.removeEventListener('keydown',handleKeydown);
        }
    }, [audio, image, squareImage, color, isSmallPictureActive, resizeHandler, startTick, dispatch, animationIdRef])

  

    return (
        <canvas className={cls.canvas} 
            onClick={() => dispatch(playerActions.togglePause())} 
            ref={ref as any}
        />
    );
};

