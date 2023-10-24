import { useSelector } from 'react-redux'
import { useEffect, useRef, useCallback } from 'react'
import { renderForPreview } from '@/entity/vizualizer/utils/renderForPreview'
import { useGetFile } from '@/entity/fileStorage'
import { getColor } from '../model/selectors/getColor'
import { FilesContext } from '../model/filesStorage/FilesContext'
import { FormDataEntries } from '../model/filesStorage/types'
import { getIsSmallPictureActive } from '../model/selectors/getIsSmallPictureActive'

export const useRenderPreview = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const color = useSelector(getColor)
    const isSmallPictureActive = useSelector(getIsSmallPictureActive)
    const getFile = useGetFile({
        context: FilesContext
    })

    const wideImageRef = useRef<HTMLImageElement | undefined>(undefined)
    const imageSquareRef = useRef<HTMLImageElement | undefined>(undefined)
    
    const wideImageFile = getFile(FormDataEntries.IMAGE_CROPPED_WIDE_FILE) as File | undefined
    const squareImageFile = getFile(FormDataEntries.IMAGE_CROPPED_SQUARE_FILE) as File | undefined

    const render = useCallback(() => {
        renderForPreview({
            canvas: canvasRef.current!,
            color,
            context: canvasRef.current!.getContext('2d')!,
            image: wideImageRef.current,
            squareImage: imageSquareRef.current,
            isSmallPictureActive: isSmallPictureActive ?? true,
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [color, isSmallPictureActive, squareImageFile, wideImageFile])

    useEffect(() => {
        if (wideImageFile) {
            wideImageRef.current = new Image()
            wideImageRef.current.src = URL.createObjectURL(wideImageFile)                    
            wideImageRef.current.onload = () => {
                render()
            }
        } else {
            wideImageRef.current = undefined
            render()
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wideImageFile])

    useEffect(() => {
        if (squareImageFile) {
            imageSquareRef.current = new Image()
            imageSquareRef.current.src = URL.createObjectURL(squareImageFile)                    
            imageSquareRef.current.onload = () => {
                render()
            }
        } else {
            imageSquareRef.current = undefined
            render()
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [squareImageFile])

    useEffect(() => {
        if (!wideImageRef.current && !imageSquareRef.current) return
        render()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [color, isSmallPictureActive])


    useEffect(() => {
        if (!containerRef?.current) return
        const resizeCb = () => {
            if (!containerRef?.current) return
            if (!canvasRef?.current) return
            const width = containerRef.current.clientWidth - 34
            canvasRef.current.height = width / 1920 * 1080
            canvasRef.current.width = width
            render()
        }
        resizeCb()
        window.addEventListener('resize', resizeCb)

        return () => {
            //eslint-disable-next-line react-hooks/exhaustive-deps
            window.removeEventListener('resize', resizeCb)
        }
    }, [render])

    return {
        canvasRef,
        containerRef
    }
}