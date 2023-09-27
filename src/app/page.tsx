import { createTrackSearchParams, trackServerApi, tracksBannerLimit } from '@/entity/track'
import { UserBanner, createUsersSearchParams, userServerApi, usersBannerLimit } from '@/entity/user'
import { TrackBanner } from '@/feature/Track'
import { ItemsSection } from '@/shared/ui/ItemsSection/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'

export default async function Home() {
    const popularTracksSearch = createTrackSearchParams({
        limit: tracksBannerLimit,
        order: 'DESC',
        orderBy: 'listenings_count',
        page: 1,
    })
    const newTracksSearch = createTrackSearchParams({
        limit: tracksBannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1,
    })
    const popularUsersSearch = createUsersSearchParams({
        limit: usersBannerLimit,
        order: 'DESC',
        orderBy: 'listenings_count',
        page: 1,
    })

    const popularTracksData = await trackServerApi.get(popularTracksSearch)
    const newTracksData = await trackServerApi.get(newTracksSearch)
    const popularUsersData = await userServerApi.get(popularUsersSearch)

    return (
        <>
            {popularTracksData.tracks.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Популярные треки' href='/popular-tracks'/>
                    <TrackBanner tracks={popularTracksData.tracks}/>
                </ItemsSection>
                :
                undefined
            }

            {newTracksData.tracks.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Новые треки' href='/new-tracks'/>
                    <TrackBanner tracks={newTracksData.tracks}/>
                </ItemsSection>
                :
                undefined
            }

            {popularUsersData.users.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Популярные пользователи' href='/popular-users'/>
                    <UserBanner users={popularUsersData.users}/>
                </ItemsSection>
                :
                undefined
            }
        </>
    )
}
