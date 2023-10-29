import { UserBannerSkeleton } from '@/entity/user'
import { TrackBannerSkeleton } from '@/feature/Track'
import { ItemsSectionSkeleton } from '@/shared/ui/ItemsSection'
import { ItemsTitleSkeleton } from '@/shared/ui/ItemsTitle'

export default function HomePageLoading() {
    return (
        <>
            <ItemsSectionSkeleton>
                <ItemsTitleSkeleton/>
                <TrackBannerSkeleton
                    itemsCount={12}
                />
            </ItemsSectionSkeleton>
            <ItemsSectionSkeleton>
                <ItemsTitleSkeleton/>
                <TrackBannerSkeleton
                    itemsCount={12}
                />
            </ItemsSectionSkeleton>
            <ItemsSectionSkeleton>
                <ItemsTitleSkeleton/>
                <UserBannerSkeleton
                    itemsCount={12}
                />
            </ItemsSectionSkeleton>
        </>
    )
}