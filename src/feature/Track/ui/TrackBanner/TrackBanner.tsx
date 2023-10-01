import { Track } from '@/entity/track';
import { BannerSwiper } from '@/shared/ui/BannerSwiper/BannerSwiper';
import { TrackCard } from '../TrackCard/TrackCard';

interface ISlickProps {
    tracks: Track[]
    marginBottom?: boolean
    isMobile: boolean
    className?: string
    showIsDeleted?: boolean
}


export const TrackBanner: React.FunctionComponent<ISlickProps> = ({
    tracks,
    className,
    marginBottom,
    isMobile,
    showIsDeleted
}) => {
    
    return (
        <BannerSwiper isMobile={isMobile}  rows={3} marginBottom={marginBottom} className={className}>
            {tracks.map(t => (
                <TrackCard 
                    track={t} 
                    tracks={tracks} 
                    key={t.id} 
                    isMobile={isMobile} 
                    showIsDeleted={showIsDeleted}
                />
            ))}
        </BannerSwiper>
    );
};
