import { UserList, userServerApi } from '@/entity/user'
import { ItemsSection } from '@/shared/ui/ItemsSection/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'
import { Pagination } from '@/widgets/Pagination'

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default async function PopularUsers({
    searchParams
}: Props) {

    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? process.env.NEXT_PUBLIC_STANDART_PER_PAGE

    const popularUsersData = await userServerApi.get({
        limit: Number(per_page),
        order: 'DESC',
        orderBy: 'listenings_count',
        page: Number(page),
    })

    return (
        <>
            <div>
                <ItemsSection>
                    <ItemsTitle title='Популярные треки'/>
                    <UserList 
                        users={popularUsersData.users}
                    />
                </ItemsSection>
            </div>
            <Pagination total={popularUsersData.total}/>
        </>
    )
}