import { useSelector } from 'react-redux';
import { TrackCard } from '@/feature/Track';
import { getIsPlayerOpened, getPlaylist, getPlaylistOpened } from '@/entity/player';
import { ItemsTitle } from '@/shared/ui/ItemsTitle';
import cls from './DesktopPlaylist.module.scss'

export const DesktopPlaylist: React.FunctionComponent = () => {

    const playlist = useSelector(getPlaylist)
    const showPlaylist = useSelector(getPlaylistOpened)
    const isOpened = useSelector(getIsPlayerOpened)

    const showFlag = showPlaylist && playlist && !isOpened

    if (!showFlag) return null

    // return (
    //     <div
    //         className={cls.container}
    //     >
    //         <ItemsTitle title='Далее'/>
    //         <div className={cls.tracks_container}>
    //             {
    //                 playlist.map((t) => (
    //                     <TrackCard
    //                         track={t}
    //                         tracks={playlist}
    //                         key={t.id}
    //                         width='full'
    //                         isMobile={false}
    //                     />
    //                 ))
    //             }
    //         </div>
    //     </div>
    // );

    return (
        <div
            className={cls.container}
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
        </div>
    );
};
