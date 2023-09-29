'use client'
import { animated, useSpring } from '@react-spring/web';
import Image from 'next/image';
import { Track } from '@/entity/track';
import cls from './BlurImage.module.scss'

interface IBlurImageProps {
    track: Track
}

export const BlurImage: React.FunctionComponent<IBlurImageProps> = ({
    track
}) => {

    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0, y: -200 },
            to: { opacity: 1, y: 0 },
        }),
        []
    )

    return <animated.div style={props} className={cls.container}>
        <Image 
            src={track.picture_source.square_medium} 
            alt='' 
            fill
            sizes='100%'
            className={cls.image}
        />
    </animated.div>
}