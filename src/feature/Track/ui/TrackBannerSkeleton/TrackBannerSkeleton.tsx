import { BannerSwiper } from '@/shared/ui/BannerSwiper';
import { TrackCardSkeleton } from '../TrackCardSkeleton/TrackCardSkeleton';

interface ITrackBannerSkeletonProps {
    itemsCount: number
    className?: string
}

export const TrackBannerSkeleton: React.FunctionComponent<ITrackBannerSkeletonProps> = ({
    itemsCount,
    className,
}) => {

    let items: number[] = []
    for (let i = 0; i < itemsCount; i++) {
        items.push(i)
    }

    return (
        <BannerSwiper isMobile rows={3} className={className}>
            {items.map(t => (
                <TrackCardSkeleton key={t}/>
            ))}
        </BannerSwiper>
    )
};
