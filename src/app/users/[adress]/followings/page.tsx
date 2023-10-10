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
    params: {
        adress: string
    }
}

export async function generateMetadata({ params: { adress } }: Props) {
    const user = await userServerApi.getByAdress(adress)
    return {
        title: user.name + ' | ' + 'MuCloud'
    }
}

export default async function Followings({
    searchParams,
    params: { adress }
}: Props) {

    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? process.env.NEXT_PUBLIC_STANDART_PER_PAGE

    const user = await userServerApi.getByAdress(adress)

    const session = await getServerSession(authOptions)

    if (session?.user?.id === user.id) {
        redirect('/library/followings')
    }

    const follingsData = await userServerApi.getFollowings(user.id, {
        limit: Number(per_page),
        order: 'DESC',
        orderBy: 'createdAt',
        page: Number(page),
    })

    return (
        <>
            <div>
                <ItemsSection>
                    <ItemsTitle title={`Подписки ${user.name}`}/>
                    <UserList 
                        users={follingsData.users}
                    />
                </ItemsSection>
            </div>
            <Pagination total={follingsData.total}/>
        </>
    )
}