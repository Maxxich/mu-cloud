'use client'
import Link from 'next/link'
import { animated, useSpring } from '@react-spring/web';
import { Track } from '@/entity/track';
import { formatListenings } from '@/shared/lib/helpers/formatListenings/formatListenings';
import cls from './Info.module.scss'


interface IInfoProps {
    track: Track
    listenings: number
    isMobile: boolean
}

export const Info: React.FunctionComponent<IInfoProps> = ({
    track,
    listenings,
    isMobile
}) => {

    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0, y: 20 },
            to: { opacity: 1, y: 0 },
            delay: 200
        }),
        []
    )

    return (
        <animated.div className={cls.textColumn} style={props}>
            <span className={cls.trackname}>{track.name}</span>
            {
                isMobile
                    ? <span>{track.owners[0].name}</span>
                    : <Link href={`/users/${track.owners[0].adress}`} className={cls.linkAuthor}>{track.owners[0].name}</Link>
            }
            <span className={cls.listenings}>Прослушиваний: {formatListenings(listenings)}</span>
        </animated.div>
    );
};

