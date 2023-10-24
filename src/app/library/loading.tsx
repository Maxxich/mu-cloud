import { UserBannerSkeleton } from '@/entity/user'
import { TrackBannerSkeleton } from '@/feature/Track'
import { ItemsSection } from '@/shared/ui/ItemsSection'
import { ItemsTitleSkeleton } from '@/shared/ui/ItemsTitle'
import { UserHeaderSkeleton } from '@/widgets/UserHeader'

export default function LibraryLoading() {
    return (
        <>
            <UserHeaderSkeleton
                isMobile={false}
            />
            <ItemsSection>
                <ItemsTitleSkeleton/>
                <TrackBannerSkeleton
                    itemsCount={12}
                />
            </ItemsSection>
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