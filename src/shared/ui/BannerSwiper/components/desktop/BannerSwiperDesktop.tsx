import { useSpring, animated } from '@react-spring/web';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react'
import IconArrow from '@/shared/assets/svg/ArrowBottom.svg'
import { BannerSwiperProps } from '../../helpers/type';
import { mapOverflowToClass } from '../../helpers/mapPropsToClass';
import cls from '../../BannerSwiper.module.scss'

const scrollCoef = 0.8

export const BannerSwiperDesktop: React.FunctionComponent<BannerSwiperProps> = ({
    children,
    rows = 1,
    overflow = 'hidden',
    className,
    marginBottom
}) => {

    const [isStart, setIsStart] = useState<boolean>(true)
    const [isEnd, setIsEnd] = useState<boolean>(false)

    const [{ x }, api] = useSpring(() => ({ x: 0 }))
    const ref = useRef<HTMLDivElement>()
    const containerRef = useRef<HTMLDivElement>()

    useEffect(() => {
        const handler = () => {
            checkEdges(x.get())
        }
        setTimeout(handler, 0)
        window.addEventListener('resize', handler)
        return () => window.removeEventListener('resize', handler)
    })

    const checkEdges = (targetX: number) => {
        if (!ref?.current || !containerRef?.current) return
        if (ref.current.offsetWidth <= containerRef.current.offsetWidth) {
            if (!isStart) setIsStart(true)
            if (!isEnd)  setIsEnd(true)
            return
        }
        const viewPortWidth = containerRef.current.offsetWidth
        const leftEdgeX = targetX
        const rightEdgeX = targetX + ref.current.offsetWidth

        if (leftEdgeX < 0) {
            if (isStart) setIsStart(false)
        } else {
            if (!isStart) setIsStart(true)
        }

        if (rightEdgeX > viewPortWidth) {
            if (isEnd) setIsEnd(false)
        } else {
            if (!isEnd)  setIsEnd(true)
        }
    }
    
    const onNext = () => {
        if (!ref?.current || !containerRef?.current) return

        const scrollWidth = containerRef.current.offsetWidth * scrollCoef

        const avaliableDragOffset =  -ref.current.offsetWidth + containerRef.current.offsetWidth

        if (ref.current.offsetWidth <= containerRef.current.offsetWidth) return

        if (x.get() - scrollWidth <= avaliableDragOffset) {
            api.start({ x: avaliableDragOffset })
            checkEdges(avaliableDragOffset)
        } else {
            api.start({ x: x.get() - scrollWidth })
            checkEdges(x.get() - scrollWidth)
        }

        
    }

    const onPrevius = () => {
        if (!ref?.current || !containerRef?.current) return

        const scrollWidth = containerRef.current.offsetWidth * scrollCoef

        if (ref.current.offsetWidth <= containerRef.current.offsetWidth) return
        if (x.get() + scrollWidth >= 0) {
            api.start({ x: 0 })
            checkEdges(0)
        } else {
            api.start({ x: x.get() + scrollWidth })
            checkEdges(x.get() + scrollWidth)
        }
    }

    var arrayOfArrays = [];
    for (var i = 0; i < children.length; i += rows) {
        arrayOfArrays.push(children.slice(i, i + rows));
    }

    const mods: Mods = {
        [cls.marginBottom]: marginBottom
    }

    const containerClasses = classNames(
        cls.container, 
        cls[mapOverflowToClass[overflow]], 
        mods,
        className
    )

    return (
        <div 
            className={containerClasses} 
            ref={containerRef as any}
        >
            <animated.div 
                ref={ref as any} 
                style={{ x }} 
                className={cls.swiper}
            >
                {arrayOfArrays.map(
                    (array, i) => (
                        <div key={i}>
                            {array.map(element => element)}
                        </div>
                    ))
                }
            </animated.div>
            {!isStart && <button className={cls.prev} onClick={onPrevius}><IconArrow/></button>}
            {!isEnd && <button className={cls.next} onClick={onNext}><IconArrow/></button>}
        </div>
    );
};