interface IDrawImage {
  context: CanvasRenderingContext2D, 
  canvas: HTMLCanvasElement, 
  image:HTMLImageElement,
}

export const drawCenterImage = ({ context,canvas, image }: IDrawImage): void => {
    const ratio = 600/1080
    let x
    let y 
    let height
    let width


    if (canvas.width >canvas.height) {
        width = canvas.height*ratio
        height = canvas.height*ratio

    } else {
        width = canvas.width*ratio
        height = canvas.width*ratio
    }
    x = canvas.width/2-(width/2)
    y = -(height/2)
    context.drawImage(image, 0, 0, image.width, image.height, x, y, width, height)
}