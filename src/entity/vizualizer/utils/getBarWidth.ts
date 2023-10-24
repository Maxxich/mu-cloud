interface IGetBarWidth {
  fftSize: number,
  canvas: HTMLCanvasElement
}

export const getBarWidth = ({
    canvas,
    fftSize
}: IGetBarWidth): number => {
    const MIN_BAR_WIDTH = 3
    if (canvas.width / 2 / (fftSize / 2) / 4 > MIN_BAR_WIDTH) {
        return canvas.width / 2 / (fftSize / 2) / 4
    } else {
        return MIN_BAR_WIDTH
    }
}