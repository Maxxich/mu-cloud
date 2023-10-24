import { UserListSkeleton } from '@/entity/user'
import { ItemsSection } from '@/shared/ui/ItemsSection'
import { ItemsTitleSkeleton } from '@/shared/ui/ItemsTitle'

export default function PopularUsersLoading() {
    return (
        <>
            <ItemsSection>
                <ItemsTitleSkeleton/>
                <UserListSkeleton
                    itemsCount={12}
                />
            </ItemsSection>
        </>
    )
}