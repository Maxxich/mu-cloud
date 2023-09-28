import { Track } from '@/entity/track'
import cls from './TrackList.module.scss'
import { TrackCard } from '../TrackCard/TrackCard';

interface ITrackListProps {
    tracks: Track[]
    isMobile: boolean
}

export const TrackList: React.FunctionComponent<ITrackListProps> = ({
    tracks,
    isMobile
}) => {
    return (
        <div className={cls.container}>
            {tracks.map(t => <TrackCard 
                track={t} 
                tracks={tracks} 
                key={t.id}
                width={'adaptive'}
                isMobile={isMobile}
            />)}
        </div>
    )
};