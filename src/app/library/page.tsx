import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/shared/config/authConfig'
import { createTrackSearchParams, trackServerApi, tracksBannerLimit } from '@/entity/track'
import { UserBanner, createUsersSearchParams, userServerApi, usersBannerLimit } from '@/entity/user'
import { ItemsSection } from '@/shared/ui/ItemsSection/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'
import { TrackBanner } from '@/feature/Track'
import { getIsMobile } from '@/shared/lib/getIsMobile/getIsMobile'


export default async function LibraryPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/signin?callbackUrl=/library')
    }

    const id = session.user.id

    const ownTracksSearch = createTrackSearchParams({
        limit: tracksBannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1
    })

    const ownTracks = await trackServerApi.getUserOwn(id, ownTracksSearch)

    
    const addedTracksSearch = createTrackSearchParams({
        limit: tracksBannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1
    })

    const addedTracks = await trackServerApi.getUserAdded(id, addedTracksSearch)

    const followingsSearch = createUsersSearchParams({
        limit: usersBannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1
    })

    const followings = await userServerApi.getFollowings(id, followingsSearch)
    const isMobile = getIsMobile()

    return (
        <>  
            {ownTracks.tracks.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Мои треки' href='/library/own'/>
                    <TrackBanner
                        tracks={ownTracks.tracks}
                        isMobile={isMobile}
                    />
                </ItemsSection>
                :
                undefined
            }

            {addedTracks.tracks.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Добавленные' href='/library/added'/>
                    <TrackBanner
                        tracks={addedTracks.tracks}
                        isMobile={isMobile}
                    />
                </ItemsSection>
                :
                undefined
            }

            {followings.users.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Подписки' href='/library/followings'/>
                    <UserBanner
                        users={followings.users}
                    />
                </ItemsSection>
                :
                undefined
            }
        </>
    )
}