import { createTrackSearchParams, trackServerApi, tracksBannerLimit } from '@/entity/track'
import { UserBanner, createUsersSearchParams, userServerApi, usersBannerLimit } from '@/entity/user'
import { TrackBanner } from '@/feature/Track'
import { ItemsSection } from '@/shared/ui/ItemsSection/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'
import { UserHeader } from '@/widgets/UserHeader'

type Props = {
    params: {
        adress: string
    }
}

export async function generateMetadata({ params: { adress } }: Props) {
    console.log(adress)
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
    return (
        <>
            <UserHeader
                user={user}
            />
            {ownTracks.tracks.length 
                ? 
                <ItemsSection>
                    <ItemsTitle title='Треки'/>
                    <TrackBanner
                        tracks={ownTracks.tracks}
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