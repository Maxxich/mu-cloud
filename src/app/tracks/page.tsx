import { TracksResponse } from '@/entity/track'
import { TrackList } from '@/feature/Track'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'

async function getTracksData(): Promise<TracksResponse> {
    const res = await fetch('http://localhost:5001/tracks/search', {
        next: { 
            revalidate: 1,
        },
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    return res.json()
}


export default async function Tracks() {
 
    const tracksData = await getTracksData()
   


    return (
        <>
            <ItemsTitle title='Треки'/>
            <TrackList  tracks={[...tracksData.tracks, ...tracksData.tracks, ...tracksData.tracks, ...tracksData.tracks, ...tracksData.tracks, ...tracksData.tracks]}/>
        </>
    )
}
