import { backendUrl } from '@/shared/const/backendUrl'
import { createUrlSearchParams } from '@/shared/lib/createUrlSearchParams/createUrlSearchParams'
import { createUserImagesSrc } from '@/entity/user/lib/createUserImageSrc'
import { Track } from '../model/types/track'
import { createTrackImagesSrc } from '../lib/createTrackImageSrc'

interface Params {
    page?: number, 
    limit?: number,
    search?: string
    order?: 'ASC' | 'DESC' | 'asc' | 'desc' | -1 | 1,
    orderBy?: 'createdAt' | 'listenings_count',
}

interface TracksResponse {
    tracks: Track[],
    total: number
}

const bannerLimit = 20

async function get(params: Params): Promise<TracksResponse> {
    
    const res = await fetch(
        backendUrl + '/tracks/search?' + createUrlSearchParams(params), 
        {
            next: { 
                revalidate: 1,
            },
            
        }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    const data = await res.json() as TracksResponse
    data.tracks.map(
        (t) => {
            t.owners.map(o => o.picture_source = createUserImagesSrc(o))
            t.feates.map(f => f.picture_source = createUserImagesSrc(f))
            t.picture_source = createTrackImagesSrc(t)
            return t
        }
    )
    return data
}

async function getOneById(id: number): Promise<Track> {
    
    const res = await fetch(`http://localhost:5001/tracks/by-id/${id}`, {
        next: { 
            revalidate: 1,
        },
    })
 
    if (!res.ok) {
        throw new Error('404 Трек не найден!(')
    }
 
    const track = await res.json()
    track.picture_source = createTrackImagesSrc(track)
    return track
}

async function getUserOwn(id: number, params: Params): Promise<TracksResponse> {

    const res = await fetch(
        backendUrl + `/tracks/own/${id}?` + createUrlSearchParams(params), 
        {
            next: { 
                revalidate: 1,
            },    
        }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    const data = await res.json() as TracksResponse
    data.tracks.map(
        (t) => {
            t.owners.map(o => o.picture_source = createUserImagesSrc(o))
            t.feates.map(f => f.picture_source = createUserImagesSrc(f))
            t.picture_source = createTrackImagesSrc(t)
            return t
        }
    )
    return data
}

async function getUserAdded(id: number, params: Params): Promise<TracksResponse> {

    const res = await fetch(
        backendUrl + `/tracks/added/${id}?` + createUrlSearchParams(params), 
        {
            next: { 
                revalidate: 1,
            },
            
        }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    const data = await res.json() as TracksResponse
    data.tracks.map(
        (t) => {
            t.owners.map(o => o.picture_source = createUserImagesSrc(o))
            t.feates.map(f => f.picture_source = createUserImagesSrc(f))
            t.picture_source = createTrackImagesSrc(t)
            return t
        }
    )
    return data
}

export const trackServerApi = {
    get,
    getUserOwn,
    getUserAdded,
    getOneById,
    bannerLimit
}

export type { TracksResponse }