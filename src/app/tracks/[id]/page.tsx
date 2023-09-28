import { trackServerApi } from '@/entity/track'
import { TrackCard } from '@/feature/Track'
import { getIsMobile } from '@/shared/lib/getIsMobile/getIsMobile'

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: { id } }: Props) {
    const track = await trackServerApi.getOneById(Number(id))
    return {
        title: track.name + ' | ' + 'MuCloud'
    }
}

export default async function TrackPage ({ params: { id } }: Props) {
    const track = await trackServerApi.getOneById(Number(id))

    const isMobile = getIsMobile()

    return (
        <TrackCard
            track={track}
            tracks={[track]}
            isMobile={isMobile}
        />
    )
}