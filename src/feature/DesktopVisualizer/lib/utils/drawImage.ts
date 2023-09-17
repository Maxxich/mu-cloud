interface IDrawImage {
  context: CanvasRenderingContext2D, 
  canvas: HTMLCanvasElement, 
  image:HTMLImageElement,
  scale: number
}

export const drawImage = ({ context,canvas, image, scale }: IDrawImage): void => {
  
    let sx = 0
    let sy = 0
    let sWidth = image.width 
    let sHeight = image.height
    let ratio

    if (canvas.width >canvas.height) {
        ratio =canvas.height / canvas.width
        sHeight = image.width* ratio
        sy = (image.height - sHeight) / 2
        if (sHeight > image.height) {
            sHeight = image.height
            sy = 0
            ratio = canvas.width /canvas.height
            sWidth = image.height * ratio
            sx = (image.width- sWidth) / 2
        }
    } else {
        ratio = canvas.width /canvas.height
        sWidth = image.height * ratio
        sx = (image.width- sWidth) / 2
        if (sWidth > image.width) {
            sWidth = image.width
            sx = 0
            ratio =canvas.height / canvas.width
            sHeight = image.width* ratio
            sy = (image.height - sHeight) / 2
        }
    }
    context.drawImage(image, sx+scale*10, sy+scale*10, sWidth-scale*10*2, sHeight-scale*10*2, 0, 0, canvas.width, canvas.height)
}