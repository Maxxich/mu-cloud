import { backendUrl } from '@/shared/const/backendUrl'
import { createUrlSearchParams } from '@/shared/lib/createUrlSearchParams/createUrlSearchParams'
import { User } from '../model/types/user'

interface SearchUsers {
    page?: number, 
    limit?: number,
    search?: string
    order?: 'ASC' | 'DESC' | 'asc' | 'desc' | -1 | 1,
    orderBy?: 'createdAt' | 'listenings_count',
  }

interface UsersResponse {
    users: User[],
    total: number
  }

const bannerLimit = 8

function createUsersSearchParams(params: SearchUsers) {
    return createUrlSearchParams(params)
}

async function getPopularUsers(): Promise<UsersResponse> {
    
    const urlParams = createUsersSearchParams({
        limit: bannerLimit,
        order: 'DESC',
        orderBy: 'listenings_count',
        page: 1,
    })

    const res = await fetch(backendUrl + '/users/search?' + urlParams, {
        next: { 
            revalidate: 1,
        },
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    return res.json()
}

export const userServerApi = {
    getPopularUsers
}