import { UserList, UsersResponse } from '@/entity/user'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'

async function getUsersData(): Promise<UsersResponse> {
    const res = await fetch('http://localhost:5001/users/search', {
        next: { 
            revalidate: 1,
        },
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
 
    return res.json()
}

export default async function Users() {
 
    const usersData = await getUsersData()


    return (
        <>
            <ItemsTitle title='Пользователи'/>
            <UserList users={[...usersData.users, ...usersData.users, ...usersData.users, ...usersData.users, ...usersData.users]}/>
        </>
    )
}
