import { useSelector } from 'react-redux';
import { useTransition, animated } from '@react-spring/web';
import { TrackCard } from '@/feature/Track';
import { getIsPlayerOpened, getPlaylist, getPlaylistOpened } from '@/entity/player';
import { ItemsTitle } from '@/shared/ui/ItemsTitle';
import cls from './PlaylistWhileClosedVisualizer.module.scss'

export const PlaylistWhileClosedVisualizer: React.FunctionComponent = () => {

    const playlist = useSelector(getPlaylist)
    const showPlaylist = useSelector(getPlaylistOpened)
    const isOpened = useSelector(getIsPlayerOpened)

    const showFlag = showPlaylist && playlist && !isOpened

    const transition = useTransition(showFlag, {
        from: { opacity: 0, y: window.innerHeight * 0.6 },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0, y: window.innerHeight * 0.6  },
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
                    <ItemsTitle title='Далее'/>
                    <div className={cls.tracks_container}>
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
                </animated.div>
            )
            : null
    )
};
