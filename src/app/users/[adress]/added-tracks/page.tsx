import { trackServerApi } from '@/entity/track'
import { userServerApi } from '@/entity/user'
import { TrackList } from '@/feature/Track'
import { authOptions } from '@/shared/config/authConfig'
import { getIsMobile } from '@/shared/lib/getIsMobile/getIsMobile'
import { ItemsSection } from '@/shared/ui/ItemsSection/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'
import { Pagination } from '@/widgets/Pagination'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

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

export default async function AddedTracks({
    searchParams,
    params: { adress }
}: Props) {

    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '5'

    const user = await userServerApi.getByAdress(adress)

    const session = await getServerSession(authOptions)

    if (session?.user?.id === user.id) {
        redirect('/library/added-tracks')
    }

    const addedTracksData = await trackServerApi.getUserAdded(user.id, {
        limit: Number(per_page),
        order: 'DESC',
        orderBy: 'createdAt',
        page: Number(page),
    })
    const isMobile = getIsMobile()

    return (
        <>
            <div>
                <ItemsSection>
                    <ItemsTitle title={`Добавленные ${user.name}`}/>
                    <TrackList 
                        tracks={addedTracksData.tracks}
                        isMobile={isMobile}
                    />
                </ItemsSection>
            </div>
            <Pagination total={addedTracksData.total}/>
        </>
    )
}