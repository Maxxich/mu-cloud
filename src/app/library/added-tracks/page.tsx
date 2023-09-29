import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { trackServerApi } from '@/entity/track'
import { TrackList } from '@/feature/Track'
import { authOptions } from '@/shared/config/authConfig'
import { getIsMobile } from '@/shared/lib/getIsMobile/getIsMobile'
import { ItemsSection } from '@/shared/ui/ItemsSection/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'
import { Pagination } from '@/widgets/Pagination'

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    },
}

export async function generateMetadata() {
    return {
        title: 'Добавленные треки | ' + 'MuCloud'
    }
}

export default async function AddedTracks({
    searchParams,
}: Props) {

    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '5'

    const session = await getServerSession(authOptions)

    if (!session?.user) {
        redirect('/signin?callbackUrl=/library/added-tracks')
    }

    const id = session.user.id

    const addedTracksData = await trackServerApi.getUserAdded(id, {
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
                    <ItemsTitle title={'Добавленные'}/>
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