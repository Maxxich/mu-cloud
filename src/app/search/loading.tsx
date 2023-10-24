import { UserBannerSkeleton } from '@/entity/user'
import { TrackBannerSkeleton } from '@/feature/Track'
import { ItemsSection } from '@/shared/ui/ItemsSection'
import { ItemsTitleSkeleton } from '@/shared/ui/ItemsTitle'

export default function SearchLoading() {
    return (
        <>
            {/* todo Header */}
            <ItemsSection>
                <ItemsTitleSkeleton/>
                <TrackBannerSkeleton
                    itemsCount={12}
                />
            </ItemsSection>
            <ItemsSection>
                <ItemsTitleSkeleton/>
                <UserBannerSkeleton
                    itemsCount={12}
                />
            </ItemsSection>
        </>
    )
}