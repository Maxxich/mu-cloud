import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { UserList, userServerApi } from '@/entity/user'
import { authOptions } from '@/shared/config/authConfig'
import { ItemsSection } from '@/shared/ui/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle'
import { Pagination } from '@/widgets/Pagination'

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    },
}

export async function generateMetadata() {
    return {
        title: 'Мои подписки | ' + 'MuCloud'
    }
}

export default async function Followings({
    searchParams,
}: Props) {

    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? process.env.NEXT_PUBLIC_STANDART_PER_PAGE

    const session = await getServerSession(authOptions)

    if (!session?.user) {
        redirect('/signin?callbackUrl=/library/followings')
    }

    const id = session.user.id

    const follingsData = await userServerApi.getFollowings(id, {
        limit: Number(per_page),
        order: 'DESC',
        orderBy: 'createdAt',
        page: Number(page),
    })

    return (
        <>
            <div>
                <ItemsSection>
                    <ItemsTitle title={'Мои подписки'}/>
                    <UserList 
                        users={follingsData.users}
                    />
                </ItemsSection>
            </div>
            <Pagination total={follingsData.total}/>
        </>
    )
}