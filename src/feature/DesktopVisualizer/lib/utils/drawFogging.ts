interface IDrawFogging {
  context: CanvasRenderingContext2D, 
  canvas: HTMLCanvasElement, 
  volume: number
}

export const drawFogging = ({ canvas,context, volume }: IDrawFogging) => {
    const fogging = volume*0.5 > 0.2 ? volume*0.5 : 0.4
    context.fillStyle = `rgba(0,0,0,${fogging})`
    context.fillRect(0, 0, canvas.width, canvas.height)
}