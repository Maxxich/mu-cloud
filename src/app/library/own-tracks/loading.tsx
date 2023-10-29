import { TrackListSkeleton } from '@/feature/Track'
import { ItemsSectionSkeleton } from '@/shared/ui/ItemsSection'
import { ItemsTitleSkeleton } from '@/shared/ui/ItemsTitle'

export default function OwnTracksLoading() {
    return (
        <>
            <ItemsSectionSkeleton>
                <ItemsTitleSkeleton/>
                <TrackListSkeleton
                    itemsCount={12}
                />
            </ItemsSectionSkeleton>
        </>
    )
}