'use client'
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import classNames from 'classnames';
import { useRef } from 'react'
import { BannerSwiperProps } from '../../helpers/type';
import { mapOverflowToClass } from '../../helpers/mapPropsToClass';
import cls from '../../BannerSwiper.module.scss'

export const BannerSwiperMobile: React.FunctionComponent<BannerSwiperProps> = ({
    children,
    rows = 1,
    overflow = 'hidden',
    className,
}) => {

    const [{ x }, api] = useSpring(() => ({ x: 0 }))
    const ref = useRef<HTMLDivElement>()
    const containerRef = useRef<HTMLDivElement>()
    const bind = useDrag(({ offset: [ox]  }) => {
        if (!ref?.current || !containerRef?.current) return 

        if (ref.current.offsetWidth <= containerRef.current.offsetWidth) return

        const avaliableDragOffset =  -ref.current.offsetWidth + containerRef.current.offsetWidth

        if (ox > 0) {
            api.start({ x: 0, immediate: true })
        }
        else if (ox < avaliableDragOffset) {
            api.start({ x: avaliableDragOffset, immediate: true });
        } else {
            api.start({ x: ox, immediate: true })
        }
    },{
        pointer: {
            touch: true
        }
    })

    var arrayOfArrays = [];
    for (var i = 0; i < children.length; i += rows) {
        arrayOfArrays.push(children.slice(i, i + rows));
    }

    const containerClasses = classNames(
        cls.container, 
        cls[mapOverflowToClass[overflow]], 
        className
    )

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