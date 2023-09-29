'use client'
import { animated, useSpring } from '@react-spring/web';
import { Image } from '@/shared/ui/Image/Image';
import { Track } from '@/entity/track';
import cls from './ImageBlock.module.scss'

interface IImageBlockProps {
    track: Track
}

export const ImageBlock: React.FunctionComponent<IImageBlockProps> = ({
    track
}) => {

    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0, y: 20 },
            to: { opacity: 1, y: 0 },
        }),
        []
    )

    return (
        <animated.div className={cls.imageWrapper} style={props}>
            <Image
                src={track.picture_source.square}
                alt='image'
                size={'l'}
                backlight
            />
        </animated.div>
    );
};