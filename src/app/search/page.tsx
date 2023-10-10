import { trackServerApi } from '@/entity/track'
import { UserBanner, userServerApi } from '@/entity/user'
import { TrackBanner } from '@/feature/Track'
import { ItemsSection } from '@/shared/ui/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle'
import { Text } from '@/shared/ui/Text'
import { getIsMobile } from '@/shared/lib/getIsMobile/getIsMobile'
import { Header } from './Header'

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default async function Search({
    searchParams
}: Props) {

    const search: string = (searchParams['search'] ?? '') as string

    const tracks = await trackServerApi.get({
        limit: trackServerApi.bannerLimit,
        order: 'DESC',
        orderBy: 'listenings_count',
        page: 1,
        search
    })
    const users = await userServerApi.get({
        limit: userServerApi.bannerLimit,
        order: 'DESC',
        orderBy: 'listenings_count',
        page: 1,
        search
    })

    const isMobile = getIsMobile()
    
    return (
        <>
            <Header 
                search={search}
                isMobile={isMobile}
            />

            {search && tracks.tracks.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Новые треки' href={'/search/tracks?search=' + search}/>
                    <TrackBanner 
                        tracks={tracks.tracks}
                        isMobile={isMobile}
                    />
                </ItemsSection>
                :
                null
            }

            {search && users.users.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Пользователи' href={'/search/users?search=' + search}/>
                    <UserBanner 
                        users={users.users}
                        isMobile={isMobile}    
                    />
                </ItemsSection>
                :
                null
            }
            {
                (tracks.total + users.total) === 0 
                    ? <Text>Ничего не найдено</Text>
                    : null
            }

        </>
    )
}