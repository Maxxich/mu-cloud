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

export const usersBannerLimit = 8

export function createUsersSearchParams(params: SearchUsers) {
    return createUrlSearchParams(params)
}

async function get(urlParams: string): Promise<UsersResponse> {

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


async function getFollowings(id: number,urlParams: string): Promise<UsersResponse> {
    const res = await fetch(backendUrl + `/users/subscriptions/${id}?` + urlParams, {
        next: { 
            revalidate: 1,
        },
    })
    if (!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')
    }
 
    return res.json()
}

async function getByAdress(adress: string): Promise<User> {
    const res = await fetch(
        backendUrl + `/users/get-by-id-or-adress/${adress}`, 
        {
            next: { 
                revalidate: 1,
            },
        }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    return res.json()
}

async function getListeningsCountById(id: number): Promise<number> {
    const res = await fetch(
        backendUrl + `/users/listenings-count/${id}`, 
        {
            next: { 
                revalidate: 1,
            },
        }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    return res.json()
}

export const userServerApi = {
    get,
    getByAdress,
    getFollowings,
    getListeningsCountById
}