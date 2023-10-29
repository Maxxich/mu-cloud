import { UserListSkeleton } from '@/entity/user'
import { ItemsSectionSkeleton } from '@/shared/ui/ItemsSection'
import { ItemsTitleSkeleton } from '@/shared/ui/ItemsTitle'

export default function FollowingsLoading() {
    return (
        <>
            <ItemsSectionSkeleton>
                <ItemsTitleSkeleton/>
                <UserListSkeleton
                    itemsCount={12}
                />
            </ItemsSectionSkeleton>
        </>
    )
}