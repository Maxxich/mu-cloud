import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { trackServerApi } from '@/entity/track'
import { userServerApi } from '@/entity/user'
import { TrackList } from '@/feature/Track'
import { authOptions } from '@/shared/config/authConfig'
import { getIsMobile } from '@/shared/lib/helpers/getIsMobile/getIsMobile'
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

export default async function OwnTracks({
    searchParams,
    params: { adress }
}: Props) {

    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? process.env.NEXT_PUBLIC_STANDART_PER_PAGE

    const user = await userServerApi.getByAdress(adress)

    const session = await getServerSession(authOptions)

    if (session?.user?.id === user.id) {
        redirect('/library/own-tracks')
    }


    const ownTracksData = await trackServerApi.getUserOwn(user.id, {
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
                    <ItemsTitle title={`Треки ${user.name}`}/>
                    <TrackList 
                        tracks={ownTracksData.tracks}
                        isMobile={isMobile}
                    />
                </ItemsSection>
            </div>
            <Pagination total={ownTracksData.total}/>
        </>
    )
}