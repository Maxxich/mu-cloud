import { Track } from '@/entity/track'
import { TrackCard } from './TrackCard';

interface ITrackListProps {
    tracks: Track[]
}

export const TrackList: React.FunctionComponent<ITrackListProps> = ({
    tracks
}) => {
    return tracks.map(t => <TrackCard track={t} tracks={tracks} key={t.id}/>);
};