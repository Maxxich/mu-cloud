import { trackServerApi } from '@/entity/track'
import { TrackSingleFullsreen } from '@/feature/Track'
import { getIsMobile } from '@/shared/lib/helpers/getIsMobile/getIsMobile'

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
    const listenings = await trackServerApi.getListeningCountById(Number(id))

    const isMobile = getIsMobile()

    return (
        <TrackSingleFullsreen
            track={track}
            isMobile={isMobile}
            listenings={listenings}
        />
    )
}