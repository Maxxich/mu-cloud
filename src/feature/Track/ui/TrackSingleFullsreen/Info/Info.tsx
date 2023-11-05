'use client'
import Link from 'next/link'
import { animated, useTransition } from '@react-spring/web';
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

    const transition = useTransition(true, {
        from: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0 },
        delay: 200,
        config: {
            duration: 500,
        },
    })

    return transition((style, item) =>
        item ? (
            <animated.div className={cls.textColumn} style={style}>
                <span className={cls.trackname}>{track.name}</span>
                {
                    isMobile
                        ? <span>{track.owners[0].name}</span>
                        : <Link href={`/users/${track.owners[0].adress}`} className={cls.linkAuthor}>{track.owners[0].name}</Link>
                }
                <span className={cls.listenings}>Прослушиваний: {formatListenings(listenings)}</span>
            </animated.div>
        ) : null
    )
};

