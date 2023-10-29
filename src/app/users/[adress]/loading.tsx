import { UserBannerSkeleton } from '@/entity/user'
import { TrackBannerSkeleton } from '@/feature/Track'
import { ItemsSectionSkeleton } from '@/shared/ui/ItemsSection'
import { ItemsTitleSkeleton } from '@/shared/ui/ItemsTitle'
import { UserHeaderSkeleton } from '@/widgets/UserHeader'

export default function LibraryLoading() {
    return (
        <>
            <UserHeaderSkeleton
                isMobile={false}
            />
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