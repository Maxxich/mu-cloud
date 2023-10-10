import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation';
import { trackServerApi } from '@/entity/track'
import { UserBanner, userServerApi } from '@/entity/user'
import { TrackBanner } from '@/feature/Track'
import { authOptions } from '@/shared/config/authConfig';
import { ItemsSection } from '@/shared/ui/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle'
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

    const ownTracks = await trackServerApi.getUserOwn(user.id, {
        limit: trackServerApi.bannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1
    })

    const addedTracks = await trackServerApi.getUserAdded(user.id, {
        limit: trackServerApi.bannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1
    })

    const followings = await userServerApi.getFollowings(user.id, {
        limit: userServerApi.bannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1
    })
    const listeningCount = await userServerApi.getListeningsCountById(user.id)

    const session = await getServerSession(authOptions)

    const viewerId = session?.user?.id
    if (viewerId === user.id) {
        redirect('/library')
    }

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
                    <ItemsTitle 
                        title='Треки'
                        href={`/users/${adress}/own-tracks`}
                    />
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
                    <ItemsTitle 
                        title='Добавленные'
                        href={`/users/${adress}/added-tracks`}
                    />
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
                    <ItemsTitle 
                        title='Подписки'
                        href={`/users/${adress}/followings`}
                    />
                    <UserBanner
                        users={followings.users}
                        isMobile={isMobile}
                    />
                </ItemsSection>
                :
                undefined
            }
        </>
    )
}