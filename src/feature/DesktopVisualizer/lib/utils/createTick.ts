import { isMobile } from 'react-device-detect'
import { AudioAnalyser } from './AudioAnalyser'
import { Bar } from './Bar'
import { drawCenterImage } from './drawCenterImage'
import { drawFogging } from './drawFogging'
import { drawImage } from './drawImage'
import { gaussSmoothRelativeToNeighbor } from './gaussSmoothRelativeToNeighbor'
import { gaussSmoothRelativeToPrevious } from './gaussSmoothRelativeToPrevious'
import { createBars } from './createBars'

interface ITick {
  audio: HTMLAudioElement
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D
  prevVolumes: number[]
  image: HTMLImageElement
  squareImage: HTMLImageElement
  color: string | undefined,
  defaultBarColor: string
  mobileCoefficient: number
  fftSize: number
  animationIdRef: React.MutableRefObject<number | undefined>
  isSmallPictureActive: boolean
}

export const createTick = ({
    audio,
    canvas,
    context,
    prevVolumes,
    image,
    squareImage,
    color,
    defaultBarColor,
    mobileCoefficient,
    fftSize,
    animationIdRef,
    isSmallPictureActive
}: ITick): () => number | void => {
    const bars = createBars({
        canvas,
        fftSize,
    })
    const audioAnalyser = new AudioAnalyser(fftSize, audio)
    const tick = () => {
        if (audioAnalyser.initialized) {
            let volume = audioAnalyser.getVolume()
            let globalVolume = gaussSmoothRelativeToPrevious({
                prevVolumes: prevVolumes,
                smoothingFactor: 0.01,
                volume
            })
            drawImage({
                context: context,
                canvas: canvas,
                image: image,
                scale: globalVolume
            })
            drawFogging({
                context: context,
                canvas: canvas,
                volume: globalVolume,
            })
            const samples = audioAnalyser.getSamples()
            const smoothSampes = gaussSmoothRelativeToNeighbor({
                heights: samples, 
                smoothingFactor: 0.2
            })
            context.save()
            context.translate(0, canvas.height/2)  
  
            Bar.drawArray({
                bars: bars,
                samples: smoothSampes,
                canvas: canvas,
                color: color,
                context: context,
                defaultColor: defaultBarColor,
                isMobile: isMobile,
                mobileBarHeightCoefficient: mobileCoefficient
            })
            if (isSmallPictureActive) {
                drawCenterImage({
                    canvas: canvas,
                    context: context,
                    image: squareImage
                })
            }
            context.restore()
            animationIdRef.current = requestAnimationFrame(tick)
        }
    }
    return tick
} 