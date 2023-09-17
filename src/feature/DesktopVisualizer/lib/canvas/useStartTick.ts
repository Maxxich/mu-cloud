import { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getIsSmallPictureActive, getSelectedTrack } from '@/entity/player'
import { useAudio } from '@/shared/lib/useAudio/useAudio'
import { useResizeListener } from './useResizeListener'
import { useImageElements } from './useImageElements'
import { createTick } from '../utils'
import { defaultBarColor, fftSize, mobileCoefficient } from '../../config'

export const useStartTick = () => {

    const ref = useRef<HTMLCanvasElement>()
    const prevVolumesRef = useRef<number[]>([])
    const animationIdRef = useRef<number | undefined>()
    const audio = useAudio()
    const track = useSelector(getSelectedTrack)
    const isSmallPictureActive = useSelector(getIsSmallPictureActive)

    const {
        image, imageSquare
    } = useImageElements(track!)

    const startTick = useCallback(() => {
        if (!ref?.current) return
        const tick = createTick({
            audio: audio,
            fftSize,
            canvas: ref.current,
            color: track!.color,
            context: ref.current.getContext('2d')!,
            defaultBarColor,
            image,
            mobileCoefficient,
            prevVolumes: prevVolumesRef.current,
            squareImage: imageSquare,
            isSmallPictureActive,
            animationIdRef,
        })
        if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current) 
      
        }
        tick()
    }, [audio, image, isSmallPictureActive, imageSquare, track])

    useResizeListener({
        animationIdRef,
        ref,
        startTick,
    })

    return { ref }
}