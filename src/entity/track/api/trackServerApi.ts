import { backendUrl } from '@/shared/const/backendUrl'
import { createUrlSearchParams } from '@/shared/lib/helpers/createUrlSearchParams/createUrlSearchParams'
import { Track } from '../model/types/track'

interface Params extends OptionalRecord<string, string | number> {
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
    return data
}

async function getListeningCountById(id: number): Promise<number> {
    
    const res = await fetch(
        backendUrl + `/tracks/number-of-listening/${id}`, 
        {
            next: { 
                revalidate: 1,
            },
            
        }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    return await res.json() as number
}

async function getOneById(id: number): Promise<Track> {
    
    const res = await fetch(backendUrl + `/tracks/by-id/${id}`, {
        next: { 
            revalidate: 1,
        },
    })
 
    if (!res.ok) {
        throw new Error('404 Трек не найден!(')
    }
 
    const track = await res.json()
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
    return data
}

export const trackServerApi = {
    get,
    getUserOwn,
    getUserAdded,
    getOneById,
    getListeningCountById,
    bannerLimit
}

export type { TracksResponse }