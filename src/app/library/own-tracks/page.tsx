import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { trackServerApi } from '@/entity/track'
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
}

export async function generateMetadata() {
    return {
        title: 'Мои треки | ' + 'MuCloud'
    }
}

export default async function OwnTracks({
    searchParams,
}: Props) {

    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? process.env.NEXT_PUBLIC_STANDART_PER_PAGE

    const session = await getServerSession(authOptions)

    if (!session?.user) {
        redirect('/signin?callbackUrl=/library/own-tracks')
    }

    const id = session.user.id

    const ownTracksData = await trackServerApi.getUserOwn(id, {
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
                    <ItemsTitle title={'Мои треки'}/>
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