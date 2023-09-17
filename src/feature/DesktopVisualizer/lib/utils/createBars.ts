import { Bar } from './Bar'
import { getBarWidth } from './getBarWidth'

interface ICreateBars{
  fftSize: number,
  canvas: HTMLCanvasElement
}

export const createBars = ({
    canvas,
    fftSize,
}: ICreateBars): Bar[] => {
    let bars = []
    const width = getBarWidth({
        canvas,
        fftSize
    })
    for (let i = (fftSize/2); i > 1; i--) {        
        bars.push(new Bar(0, 0, width, 0, i ))
    }
    return bars
}