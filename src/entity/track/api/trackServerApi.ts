import { backendUrl } from '@/shared/const/backendUrl'
import { createUrlSearchParams } from '@/shared/lib/createUrlSearchParams/createUrlSearchParams'
import { createUserImagesSrc } from '@/entity/user/lib/createUserImageSrc'
import { Track } from '../model/types/track'
import { createTrackImagesSrc } from '../lib/createTrackImageSrc'

interface SearchTracks {
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

export const tracksBannerLimit = 20

export function createTrackSearchParams(params: SearchTracks) {
    return createUrlSearchParams(params)
}

async function get(urlParams: string): Promise<TracksResponse> {

    const res = await fetch(backendUrl + '/tracks/search?' + urlParams, {
        next: { 
            revalidate: 1,
        },
        
    })
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

async function getUserOwn(id: number, urlParams: string): Promise<TracksResponse> {

    const res = await fetch(backendUrl + `/tracks/own/${id}?` + urlParams, {
        next: { 
            revalidate: 1,
        },
        
    })
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

async function getUserAdded(id: number, urlParams: string): Promise<TracksResponse> {

    const res = await fetch(backendUrl + `/tracks/added/${id}?` + urlParams, {
        next: { 
            revalidate: 1,
        },
        
    })
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
    getUserAdded
}