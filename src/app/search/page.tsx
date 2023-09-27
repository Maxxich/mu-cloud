import { createTrackSearchParams, trackServerApi, tracksBannerLimit } from '@/entity/track'
import { UserBanner, createUsersSearchParams, userServerApi, usersBannerLimit } from '@/entity/user'
import { TrackBanner } from '@/feature/Track'
import { ItemsSection } from '@/shared/ui/ItemsSection/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'
import { Text } from '@/shared/ui/Text/Text'
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

    const tracksSearch = createTrackSearchParams({
        limit: tracksBannerLimit,
        order: 'DESC',
        orderBy: 'listenings_count',
        page: 1,
        search
    })
    const usersSearch = createUsersSearchParams({
        limit: usersBannerLimit,
        order: 'DESC',
        orderBy: 'listenings_count',
        page: 1,
        search
    })

    const tracks = await trackServerApi.get(tracksSearch)
    const users = await userServerApi.get(usersSearch)
    
    return (
        <>
            <Header search={search}/>

            {search && tracks.tracks.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Новые треки' href={'/search/tracks?search=' + search}/>
                    <TrackBanner tracks={tracks.tracks}/>
                </ItemsSection>
                :
                null
            }

            {search && users.users.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Пользователи' href={'/search/users?search=' + search}/>
                    <UserBanner users={users.users}/>
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