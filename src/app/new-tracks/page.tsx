import { createTrackSearchParams, trackServerApi } from '@/entity/track'
import { TrackList } from '@/feature/Track'
import { ItemsSection } from '@/shared/ui/ItemsSection/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'
import { Pagination } from '@/widgets/Pagination'

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default async function Home({
    searchParams
}: Props) {

    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '5'
    
    const newTracksSearch = createTrackSearchParams({
        limit: Number(per_page),
        order: 'DESC',
        orderBy: 'createdAt',
        page: Number(page),
    })

    const newTracksData = await trackServerApi.get(newTracksSearch)

    return (
        <>
            <ItemsSection>
                <ItemsTitle title='Новые треки'/>
                <TrackList tracks={newTracksData.tracks}/>
            </ItemsSection>
            <Pagination total={newTracksData.total}/>
        </>
    )
}