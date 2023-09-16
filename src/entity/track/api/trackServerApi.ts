import { backendUrl } from '@/shared/const/backendUrl'
import { createUrlSearchParams } from '@/shared/lib/createUrlSearchParams/createUrlSearchParams'
import { Track } from '../model/types/track'

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

const bannerLimit = 20

function createTrackSearchParams(params: SearchTracks) {
    return createUrlSearchParams(params)
}

async function getPopularTracks(): Promise<TracksResponse> {
    
    const urlParams = createTrackSearchParams({
        limit: bannerLimit,
        order: 'DESC',
        orderBy: 'listenings_count',
        page: 1,
    })

    const res = await fetch(backendUrl + '/tracks/search?' + urlParams, {
        next: { 
            revalidate: 1,
        },
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    return res.json()
}

async function getNewTracks(): Promise<TracksResponse> {
    const urlParams = createTrackSearchParams({
        limit: bannerLimit,
        order: 'DESC',
        orderBy: 'createdAt',
        page: 1,
    })

    const res = await fetch(backendUrl + '/tracks/search?' + urlParams, {
        next: { 
            revalidate: 1,
        },
        
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    return res.json()
}

export const trackServerApi = {
    getNewTracks, getPopularTracks
}