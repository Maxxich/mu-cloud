
export const createResizeHandler = (cbContext: any) => {
    return () => {      
        if (cbContext.props.containerRef?.current) {
      cbContext.canvas!.height = cbContext.props.containerRef.current.clientHeight
      cbContext.canvas!.width = cbContext.props.containerRef.current.clientHeight
        } else {
      cbContext.canvas!.height = window.innerHeight
      cbContext.canvas!.width = window.innerWidth
        }
    }
}