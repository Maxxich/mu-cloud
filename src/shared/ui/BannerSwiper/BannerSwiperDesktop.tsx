import { useSpring, animated } from '@react-spring/web';
// import { useDrag } from '@use-gesture/react';
import classNames from 'classnames';
import { ReactNode, useRef } from 'react'
import cls from './BannerSwiper.module.scss'

const mapOverflowToClass = {
    'hidden': 'overflow-hidden',
    'visible': 'overflow-visible',
}

const scrollCoef = 0.8


interface ICustomSwiperProps {
    elements: ReactNode[]
    rows?: 1 | 3
    overflow?: 'hidden' | 'visible'
}

export const BannerSwiperDesktop: React.FunctionComponent<ICustomSwiperProps> = ({
    elements,
    rows = 1,
    overflow = 'hidden'
}) => {

    const [{ x }, api] = useSpring(() => ({ x: 0 }))
    const ref = useRef<HTMLDivElement>()
    const containerRef = useRef<HTMLDivElement>()
    
    const onNext = () => {
        if (!ref?.current || !containerRef?.current) return

        const scrollWidth = containerRef.current.clientWidth * scrollCoef

        const avaliableDragOffset =  -ref.current.offsetWidth + containerRef.current.clientWidth

        if (x.get() - scrollWidth < avaliableDragOffset) {
            api.start({ x: avaliableDragOffset })
        } else {
            api.start({ x: x.get() - scrollWidth })
        }
    }

    const onPrevius = () => {
        if (!containerRef?.current) return
        const scrollWidth = containerRef.current.clientWidth * scrollCoef
        if (x.get() + scrollWidth > 0) {
            api.start({ x: 0 })
        } else {
            api.start({ x: x.get() + scrollWidth })
        }
    }

    // const bind = useDrag(({ offset: [ox]  }) => {
    //     if (!ref?.current || !containerRef?.current) return 

    //     const avaliableDragOffset =  -ref.current.offsetWidth + containerRef.current.clientWidth

    //     if (ox > 0) {
    //         api.start({ x: 0,  immediate: true })
    //     }
    //     else if (ox < avaliableDragOffset) {
    //         api.start({ x: avaliableDragOffset,  immediate: true });
    //     } else {
    //         api.start({ x: ox,  immediate: true })
    //     }
    // })

    var arrayOfArrays = [];
    for (var i = 0; i < elements.length; i += rows) {
        arrayOfArrays.push(elements.slice(i, i + rows));
    }

    const containerClasses = classNames(cls.container, cls[mapOverflowToClass[overflow]])

    return (
        <div 
            className={containerClasses} 
            ref={containerRef as any}
        >
            <button className={cls.prev} onClick={onPrevius}>Prev</button>
            <animated.div 
                // {...bind()} 
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
            <button className={cls.next} onClick={onNext}>Next</button>
        </div>
    );
};