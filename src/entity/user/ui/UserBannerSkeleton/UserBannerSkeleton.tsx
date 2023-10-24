import { BannerSwiper } from '@/shared/ui/BannerSwiper';
import { UserCardSkeleton } from '../UserCardSkeleton/UserCardSkeleton';

interface IProps {
    itemsCount: number
    className?: string
}


export const UserBannerSkeleton: React.FunctionComponent<IProps> = ({
    itemsCount,
    className,
}) => {

    let items: number[] = []
    for (let i = 0; i < itemsCount; i++) {
        items.push(i)
    }

    return (
        <BannerSwiper  className={className} isMobile>
            {items.map(u => (
                <UserCardSkeleton
                    variant={'column'}
                    key={u}
                />
            ))}
        </BannerSwiper>
    );
};
