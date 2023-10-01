import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/shared/config/authConfig'
import { trackServerApi } from '@/entity/track'
import { UserBanner, userServerApi } from '@/entity/user'
import { ItemsSection } from '@/shared/ui/ItemsSection/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'
import { TrackBanner } from '@/feature/Track'
import { getIsMobile } from '@/shared/lib/getIsMobile/getIsMobile'
import { UserHeader } from '@/widgets/UserHeader'
import { ProtectedPage } from '@/entity/viewer'


export default async function LibraryPage() {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
        redirect('/signin?callbackUrl=/library')
    }

    const id = session.user.id

    const ownTracks = await trackServerApi.getUserOwn(id, {
        limit: trackServerApi.bannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1
    })

    const addedTracks = await trackServerApi.getUserAdded(id, {
        limit: trackServerApi.bannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1
    })

    const followings = await userServerApi.getFollowings(id, {
        limit: userServerApi.bannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1
    })

    const user = await userServerApi.getByAdress(session.user.adress)
    const listeningCount = await userServerApi.getListeningsCountById(session.user.id)

    const isMobile = getIsMobile()

    return (
        <ProtectedPage>  
            <UserHeader
                user={user}
                listeningCount={listeningCount}
                totalTracks={ownTracks.total}
                viewerId={session.user.id}
                isMobile={isMobile}
            />
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
                        showIsDeleted
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
                        isMobile={isMobile}
                    />
                </ItemsSection>
                :
                undefined
            }
        </ProtectedPage>
    )
}