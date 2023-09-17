import cls from './UserList.module.scss'
import { UserCard } from '../UserCard/UserCard';
import { User } from '../../model/types/user';

interface IUserListProps {
    users: User[]
}

export const UserList: React.FunctionComponent<IUserListProps> = ({
    users
}) => {
    return (
        <div className={cls.container}>
            {users.map(u => (
                <UserCard 
                    href={`/users/${u.adress}`}
                    image_src={u.picture_source.small}  
                    name={u.name}
                    variant={'row'}
                    width={'adaptive'}
                    key={u.id}
                />
            ))}
        </div>  
    );
};