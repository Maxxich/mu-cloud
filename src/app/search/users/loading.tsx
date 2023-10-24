import { UserListSkeleton } from '@/entity/user'
import { ItemsSection } from '@/shared/ui/ItemsSection'
import { ItemsTitleSkeleton } from '@/shared/ui/ItemsTitle'

export default function SearchUsersLoading() {
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