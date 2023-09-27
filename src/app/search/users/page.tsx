import { UserList, createUsersSearchParams, userServerApi } from '@/entity/user'
import { ItemsSection } from '@/shared/ui/ItemsSection/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'
import { Text } from '@/shared/ui/Text/Text'
import { Pagination } from '@/widgets/Pagination'

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default async function SearchUsers({
    searchParams
}: Props) {

    const search: string = (searchParams['search'] ?? '') as string
    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '5'

    const usersSearch = createUsersSearchParams({
        limit: Number(per_page),
        order: 'DESC',
        orderBy: 'listenings_count',
        page: Number(page),
        search
    })

    const users = await userServerApi.get(usersSearch)
    
    return (
        <>
            {/* @ts-ignore */}
            <Text title size='m' bold>Результаты поиска по запросу &quot;{search}&quot; среди пользователей</Text>

            <div>
                {search && users.users.length 
                    ? 
                    <ItemsSection>
                        <ItemsTitle title='Пользователи'/>
                        <UserList users={users.users}/>
                    </ItemsSection>
                    :
                    null
                }
            </div>
            {
                (users.total) === 0 
                    ? <Text>Ничего не найдено</Text>
                    :  <Pagination total={users.total}/>
            }

        </>
    )
}