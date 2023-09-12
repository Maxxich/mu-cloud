export const formatTime = (data: number) => {
    const time = Math.trunc(data)
    const minutes = Math.floor(time/60)
    let seconds:any = time - minutes*60 
    if (seconds < 10) {
        seconds = '0'+ seconds
    }
    if (minutes == 0) {
        return `0:${seconds}`
    } else {
        return `${minutes}:${seconds}`
    }
      
}