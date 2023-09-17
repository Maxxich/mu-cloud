import { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getIsSmallPictureActive, getSelectedTrack } from '@/entity/player'
import { useAudio } from '@/shared/lib/useAudio/useAudio'
import { createTick } from './utils'
import { defaultBarColor, fftSize, mobileCoefficient } from '../config'

export const useStartTick = ({
    image,
    squareImage
} : {
    image: HTMLImageElement
    squareImage: HTMLImageElement
}) => {

    const ref = useRef<HTMLCanvasElement>()
    const prevVolumesRef = useRef<number[]>([])
    const animationIdRef = useRef<number | undefined>()
    const audio = useAudio()
    const track = useSelector(getSelectedTrack)
    const isSmallPictureActive = useSelector(getIsSmallPictureActive)

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
            squareImage: squareImage,
            isSmallPictureActive,
            animationIdRef,
        })
        if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current) 
      
        }
        tick()
    }, [audio, image, isSmallPictureActive, squareImage, track])

    return {
        startTick,
        ref,
        animationIdRef
    }
}