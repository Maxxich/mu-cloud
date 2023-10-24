import cls from '../UserList/UserList.module.scss'
import { UserCardSkeleton } from '../UserCardSkeleton/UserCardSkeleton';

interface IUserListSkeletonProps {
    itemsCount: number
}

export const UserListSkeleton: React.FunctionComponent<IUserListSkeletonProps> = ({
    itemsCount
}) => {

    let items: number[] = []
    for (let i = 0; i < itemsCount; i++) {
        items.push(i)
    }

    return (
        <div className={cls.container}>
            {items.map(u => (
                <UserCardSkeleton
                    variant={'row'}
                    width={'adaptive'}
                    key={u}
                />
            ))}
        </div>  
    );
};