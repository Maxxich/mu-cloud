import { Track } from '@/entity/track'
import cls from './TrackList.module.scss'
import { TrackCard } from '../TrackCard/TrackCard';

interface ITrackListProps {
    tracks: Track[]
}

export const TrackList: React.FunctionComponent<ITrackListProps> = ({
    tracks
}) => {
    return (
        <div className={cls.container}>
            {tracks.map(t => <TrackCard 
                track={t} 
                tracks={tracks} 
                key={t.id}
                width={'adaptive'}
            />)}
        </div>
    )
};