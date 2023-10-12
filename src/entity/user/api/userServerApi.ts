import { backendUrl } from '@/shared/const/backendUrl'
import { createUrlSearchParams } from '@/shared/lib/helpers/createUrlSearchParams/createUrlSearchParams'
import { User } from '../model/types/user'
import { createUserImagesSrc } from '../lib/createUserImageSrc'

interface Params extends OptionalRecord<string, string | number>  {
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

async function get(params: Params): Promise<UsersResponse> {

    const res = await fetch(
        backendUrl + '/users/search?' + createUrlSearchParams(params),
        {
            next: { 
                revalidate: 1,
            },
        }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    const data = await res.json() as UsersResponse
    data.users.map(
        (u) => {
            u.picture_source = createUserImagesSrc(u)
            return u
        }
    )
    return data
}


async function getFollowings(id: number, params: Params): Promise<UsersResponse> {
    const res = await fetch(
        backendUrl + `/users/subscriptions/${id}?` + createUrlSearchParams(params),
        {
            next: { 
                revalidate: 1,
            },
        }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    const data = await res.json() as UsersResponse
    data.users.map(
        (u) => {
            u.picture_source = createUserImagesSrc(u)
            return u
        }
    )
    return data
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
 
    const data = await res.json() as User
    data.picture_source = createUserImagesSrc(data)
    return data
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

async function confirmEmailByToken(token: string): Promise<boolean> {
    try {
        const res = await fetch(
            backendUrl + `/auth/confirm?token=${token}`, 
            {
                cache: 'no-cache'
            }
        )
    
        if (res.status === 400) {
            return false
        }
    
        if (!res.ok) {
            throw new Error()
        }
     
        return true
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}



export const userServerApi = {
    get,
    getByAdress,
    getFollowings,
    getListeningsCountById,
    confirmEmailByToken,
    bannerLimit,
}
export type { UsersResponse }