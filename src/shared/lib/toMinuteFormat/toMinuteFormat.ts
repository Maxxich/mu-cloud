export function toMinuteFormat(duration: number) {
    const minutes =  ~~(duration/60)
    const seconds = duration%60
    return minutes + ':' + (seconds < 10 ? ('0' + seconds) : seconds) 
  }