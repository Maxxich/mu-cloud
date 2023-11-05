'use client'
import { animated, useTransition } from '@react-spring/web';
import Image from 'next/image';
import { Track } from '@/entity/track';
import cls from './BlurImage.module.scss'

interface IBlurImageProps {
    track: Track
}

export const BlurImage: React.FunctionComponent<IBlurImageProps> = ({
    track
}) => {

    const transition = useTransition(true, {
        from: { opacity: 0, y: -200 },
        enter: { opacity: 1, y: 0 },
        config: {
            duration: 500,
        },
    })

    return transition((style, item) => 
        item ? (
            <animated.div style={style} className={cls.container}>
                <Image 
                    src={track.picture_source.square_medium} 
                    alt='' 
                    fill
                    sizes='100%'
                    className={cls.image}
                />
            </animated.div>
        ) : null
    )
}