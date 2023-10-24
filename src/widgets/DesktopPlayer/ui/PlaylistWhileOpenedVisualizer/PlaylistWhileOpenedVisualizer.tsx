import { useSelector } from 'react-redux';
import { useTransition, animated } from '@react-spring/web';
import { ItemsTitle } from '@/shared/ui/ItemsTitle';
import { TrackCard } from '@/feature/Track';
import { getIsPlayerOpened, getPlaylist, getPlaylistOpened } from '@/entity/player';
import cls from './PlaylistWhileOpenedVisualizer.module.scss'

export const PlaylistWhileOpenedVisualizer: React.FunctionComponent = () => {

    const playlist = useSelector(getPlaylist)
    const showPlaylist = useSelector(getPlaylistOpened)
    const isOpened = useSelector(getIsPlayerOpened)

    const showFlag = showPlaylist && playlist && isOpened

    
    const transition = useTransition(showFlag, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: {
            duration: 300,
        },
    })

    return transition((style, item) => 
        item 
            ? (
                <animated.div
                    className={cls.container}
                    style={style}
                >
                    <div
                        className={cls.inner}
                    >
                        <div className={cls.title_container}>
                            <ItemsTitle
                                title='Далее'
                            />
                        </div>
                        <div className={cls.tracks_scroll}>
                            {
                                playlist.map((t) => (
                                    <TrackCard
                                        track={t}
                                        tracks={playlist}
                                        key={t.id}
                                        width='full'
                                        isMobile={false}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </animated.div>
            )
            : null
    )
};

