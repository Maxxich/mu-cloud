import { getServerSession } from 'next-auth/next'
import { createTrackSearchParams, trackServerApi, tracksBannerLimit } from '@/entity/track'
import { UserBanner, createUsersSearchParams, userServerApi, usersBannerLimit } from '@/entity/user'
import { TrackBanner } from '@/feature/Track'
import { authOptions } from '@/shared/config/authConfig';
import { ItemsSection } from '@/shared/ui/ItemsSection/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'
import { UserHeader } from '@/widgets/UserHeader'
import { getIsMobile } from '@/shared/lib/getIsMobile/getIsMobile';

type Props = {
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


export default async function TrackPage ({ params: { adress } }: Props) {
    const user = await userServerApi.getByAdress(adress)

    const ownTracksSearch = createTrackSearchParams({
        limit: tracksBannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1
    })

    const ownTracks = await trackServerApi.getUserOwn(user.id, ownTracksSearch)

    
    const addedTracksSearch = createTrackSearchParams({
        limit: tracksBannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1
    })

    const addedTracks = await trackServerApi.getUserAdded(user.id, addedTracksSearch)

    const followingsSearch = createUsersSearchParams({
        limit: usersBannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1
    })

    const followings = await userServerApi.getFollowings(user.id, followingsSearch)
    const listeningCount = await userServerApi.getListeningsCountById(user.id)

    const session = await getServerSession(authOptions)
    const viewerId = session?.user.id

    const isMobile = getIsMobile()

    return (
        <>
            <UserHeader
                user={user}
                listeningCount={listeningCount}
                totalTracks={ownTracks.total}
                viewerId={viewerId}
                isMobile={isMobile}
            />
            {ownTracks.tracks.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Треки'/>
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
                    <ItemsTitle title='Добавленные'/>
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
                    <ItemsTitle title='Подписки'/>
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