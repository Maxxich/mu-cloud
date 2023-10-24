import { TrackListSkeleton } from '@/feature/Track'
import { ItemsSection } from '@/shared/ui/ItemsSection'
import { ItemsTitleSkeleton } from '@/shared/ui/ItemsTitle'

export default function PopularTracksLoading() {
    return (
        <>
            <ItemsSection>
                <ItemsTitleSkeleton/>
                <TrackListSkeleton
                    itemsCount={12}
                />
            </ItemsSection>
        </>
    )
}