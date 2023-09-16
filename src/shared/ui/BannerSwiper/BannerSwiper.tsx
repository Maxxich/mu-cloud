import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import classNames from 'classnames';
import { ReactNode, useRef } from 'react'
import cls from './BannerSwiper.module.scss'

const mapOverflowToClass = {
    'hidden': 'overflow-hidden',
    'visible': 'overflow-visible',
}


interface ICustomSwiperProps {
    elements: ReactNode[]
    rows?: 1 | 3
    overflow?: 'hidden' | 'visible'
}

export const BannerSwiper: React.FunctionComponent<ICustomSwiperProps> = ({
    elements,
    rows = 1,
    overflow = 'hidden'
}) => {

    const [{ x }, api] = useSpring(() => ({ x: 0 }))
    const ref = useRef<HTMLDivElement>()
    const containerRef = useRef<HTMLDivElement>()
    const bind = useDrag(({ offset: [ox]  }) => {
        if (!ref?.current || !containerRef?.current) return 

        const avaliableDragOffset =  -ref.current.offsetWidth + containerRef.current.clientWidth

        if (ox > 0) {
            api.start({ x: 0 })
        }
        else if (ox < avaliableDragOffset) {
            api.start({ x: avaliableDragOffset });
        } else {
            api.start({ x: ox })
        }
    })

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
            <animated.div 
                {...bind()} 
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
        </div>
    );
};