import { useRef, useEffect, RefObject } from 'react'

export const useCanvasSizes = (canvasRef: RefObject<HTMLCanvasElement>) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef?.current) return
        const resizeCb = () => {
            if (!containerRef?.current) return
            if (!canvasRef?.current) return
            const width = containerRef.current.clientWidth - 34
            canvasRef.current.height = width / 1920 * 1080
            canvasRef.current.width = width
        }
        resizeCb()
        window.addEventListener('resize', resizeCb)

        return () => {
            //eslint-disable-next-line react-hooks/exhaustive-deps
            window.removeEventListener('resize', resizeCb)
        }
    }, [])

    return {
        containerRef, 
    }
}