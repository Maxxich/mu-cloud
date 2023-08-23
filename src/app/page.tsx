import { TracksResponse } from '@/entity/track'
import { Tracklist } from '@/feature/Tracklist'

async function getData(): Promise<TracksResponse> {
  const res = await fetch('http://localhost:5001/tracks/search')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {

  const data = await getData()


  return (
    <div>
      <Tracklist tracks={data.tracks}/>
    </div>
  )
}
