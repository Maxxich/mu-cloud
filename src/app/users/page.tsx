import { UserList, userServerApi } from '@/entity/user'
import { ItemsTitle } from '@/shared/ui/ItemsTitle/ItemsTitle'

export default async function Users() {
    const usersData = await userServerApi.get({})

    return (
        <>
            <ItemsTitle title='Пользователи'/>
            <UserList users={[...usersData.users, ...usersData.users, ...usersData.users, ...usersData.users, ...usersData.users]}/>
        </>
    )
}
