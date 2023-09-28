import { UserList, createUsersSearchParams, userServerApi } from '@/entity/user'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'

export default async function Users() {
    const params = createUsersSearchParams({
        
    })
    const usersData = await userServerApi.get(params)


    return (
        <>
            <ItemsTitle title='Пользователи'/>
            <UserList users={[...usersData.users, ...usersData.users, ...usersData.users, ...usersData.users, ...usersData.users]}/>
        </>
    )
}
