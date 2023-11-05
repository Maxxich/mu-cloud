import { getServerSession } from 'next-auth'
import { authOptions } from '@/shared/config/authConfig'
import { trackServerApi } from '@/entity/track'
import { UserBanner, userServerApi } from '@/entity/user'
import { ItemsSection } from '@/shared/ui/ItemsSection'
import { ItemsTitle } from '@/shared/ui/ItemsTitle'
import { TrackBanner } from '@/feature/Track'
import { getIsMobile } from '@/shared/lib/helpers/getIsMobile/getIsMobile'
import { UserHeader } from '@/widgets/UserHeader'
import { AuthReplace } from '@/feature/AuthReplace'


export default async function LibraryPage() {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
        return <AuthReplace
            url={'/signin?callbackUrl=/library'}
        />
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
        <>  
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
        </>
    )
}