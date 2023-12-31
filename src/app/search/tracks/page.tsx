import { trackServerApi } from '@/entity/track'
import { TrackList } from '@/feature/Track'
import { getIsMobile } from '@/shared/lib/helpers/getIsMobile/getIsMobile'
import { ItemsSection } from '@/shared/ui/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle'
import { Text } from '@/shared/ui/Text'
import { Pagination } from '@/widgets/Pagination'

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default async function SearchTracks({
    searchParams
}: Props) {

    const search: string = (searchParams['search'] ?? '') as string
    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? process.env.NEXT_PUBLIC_STANDART_PER_PAGE

    const tracks = await trackServerApi.get({
        limit: Number(per_page),
        order: 'DESC',
        orderBy: 'listenings_count',
        page: Number(page),
        search
    })
    const isMobile = getIsMobile()
    
    return (
        <>
            {/* @ts-ignore */}
            <Text title size='m' bold>Результаты поиска по запросу &quot;{search}&quot; среди треков</Text>

            <div>
                {search && tracks.tracks.length 
                    ? 
                    <ItemsSection>
                        <ItemsTitle title='Треки'/>
                        <TrackList 
                            tracks={tracks.tracks}
                            isMobile={isMobile}
                        />
                    </ItemsSection>
                    :
                    null
                }
            </div>
            {
                (tracks.total) === 0 
                    ? <Text>Ничего не найдено</Text>
                    :  <Pagination total={tracks.total}/>
            }

        </>
    )
}