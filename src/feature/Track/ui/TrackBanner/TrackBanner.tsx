import { Track } from '@/entity/track';
import { BannerSwiper } from '@/shared/ui/BannerSwiper/BannerSwiper';
import { TrackCard } from '../TrackCard/TrackCard';

interface ISlickProps {
    tracks: Track[]
    className?: string
    marginBottom?: boolean
}


export const TrackBanner: React.FunctionComponent<ISlickProps> = ({
    tracks,
    className,
    marginBottom
}) => {
    
    return (
        <BannerSwiper rows={3} marginBottom={marginBottom} className={className}>
            {tracks.map(t => (
                <TrackCard track={t} tracks={tracks} key={t.id}/>
            ))}
        </BannerSwiper>
    );
};
