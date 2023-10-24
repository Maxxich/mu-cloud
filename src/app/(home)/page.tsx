import { trackServerApi } from '@/entity/track'
import { UserBanner, userServerApi } from '@/entity/user'
import { TrackBanner } from '@/feature/Track'
import { getIsMobile } from '@/shared/lib/helpers/getIsMobile/getIsMobile'
import { ItemsSection } from '@/shared/ui/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle'

export default async function Home() {
    const popularTracksData = await trackServerApi.get({
        limit: trackServerApi.bannerLimit,
        order: 'DESC',
        orderBy: 'listenings_count',
        page: 1,
    })
    const newTracksData = await trackServerApi.get({
        limit: trackServerApi.bannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1,
    })
    const popularUsersData = await userServerApi.get({
        limit: userServerApi.bannerLimit,
        order: 'DESC',
        orderBy: 'listenings_count',
        page: 1,
    })

    const isMobile = getIsMobile()

    return (
        <>
            {popularTracksData.tracks.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Популярные треки' href='/popular-tracks'/>
                    <TrackBanner 
                        tracks={popularTracksData.tracks}
                        isMobile={isMobile}
                    />
                </ItemsSection>
                :
                undefined
            }

            {newTracksData.tracks.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Новые треки' href='/new-tracks'/>
                    <TrackBanner 
                        tracks={newTracksData.tracks}
                        isMobile={isMobile}
                    />
                </ItemsSection>
                :
                undefined
            }

            {popularUsersData.users.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Популярные пользователи' href='/popular-users'/>
                    <UserBanner 
                        users={popularUsersData.users}
                        isMobile={isMobile}
                    />
                </ItemsSection>
                :
                undefined
            }
        </>
    )
}
