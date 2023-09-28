import { TrackCard } from '@/feature/Track'
import { getIsMobile } from '@/shared/lib/getIsMobile/getIsMobile'

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: { id } }: Props) {
    const track = await getTrack(Number(id))
    return {
        title: track.name + ' | ' + 'MuCloud'
    }
}

async function getTrack(id: number) {
    const res = await fetch(`http://localhost:5001/tracks/by-id/${id}`, {
        next: { 
            revalidate: 1,
        },
    })
 
    if (!res.ok) {
        throw new Error('404 Трек не найден!(')
    }
 
    return res.json()
}

export default async function TrackPage ({ params: { id } }: Props) {
    const track = await getTrack(Number(id))
    const isMobile = getIsMobile()
    return (
        <TrackCard
            track={track}
            tracks={[track]}
            isMobile={isMobile}
        />
    )
}