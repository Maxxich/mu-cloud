interface drawArray {
  bars: Bar[], 
  isMobile: boolean, 
  samples: number[], 
  canvas: HTMLCanvasElement, 
  context: CanvasRenderingContext2D, 
  defaultColor: string, 
  color: string | undefined, 
  mobileBarHeightCoefficient: number
}

export class Bar {
    x: number
    y: number
    width: number
    height: number
    index: number

    constructor(x: number, y: number, width: number, height: number, index: number) {
        this.x = x
        this.y = y
        this.width = width 
        this.height = height 
        this.index = index
    }

    update(audioInput: any) {
        const sound = audioInput * 200
        if (sound > this.height) {
            this.height = sound
        } else {
            this.height -= this.height * 0.07
        }


    }

    draw(canvas:any, context:CanvasRenderingContext2D, color:any, i:any) {
        context.strokeStyle = color
        context.fillStyle = color
        context.lineWidth = this.width
        context.shadowBlur = 40;
        context.shadowColor = color;
        context.beginPath()
        context.moveTo((canvas.width /2 - this.width * 2 - (this.width*i*4)), this.y + this.height)
        context.lineTo((canvas.width /2 - this.width * 2 - (this.width*i*4)), this.y - this.height)
        context.stroke()
        context.beginPath()
        context.moveTo(canvas.width /2 + this.width * 2 + this.width*i*4, this.y + this.height)
        context.lineTo(canvas.width /2  + this.width * 2 + this.width*i*4, this.y - this.height)
        context.stroke()
        context.shadowBlur = 0;
        context.shadowColor = '';
    }

    static drawArray({ bars, isMobile, samples, canvas, context, defaultColor, color, mobileBarHeightCoefficient }: drawArray) {
        bars.forEach( (bar, i) => {
            if(isMobile) {
                bar.update(samples[i]  * mobileBarHeightCoefficient)
            } else {
                bar.update(samples[i])
            }
            bar.draw(canvas, context, color ||  defaultColor, i)
      
        })
    }
}