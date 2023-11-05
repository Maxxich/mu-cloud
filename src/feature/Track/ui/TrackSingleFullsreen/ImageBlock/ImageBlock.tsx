'use client'
import { animated, useTransition } from '@react-spring/web';
import { Image } from '@/shared/ui/Image';
import { Track } from '@/entity/track';
import cls from './ImageBlock.module.scss'

interface IImageBlockProps {
    track: Track
}

export const ImageBlock: React.FunctionComponent<IImageBlockProps> = ({
    track
}) => {

    const transition = useTransition(true, {
        from: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0 },
        config: {
            duration: 500,
        },
    })

    return transition((style, item) => 
        item ? (
            <animated.div className={cls.imageWrapper} style={style}>
                <Image
                    src={track.picture_source.square}
                    alt='image'
                    size={'l'}
                    backlight
                />
            </animated.div>
        ) : null
    );
};