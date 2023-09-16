import { BannerSwiper } from '@/shared/ui/BannerSwiper/BannerSwiper';
import { backendUrl } from '@/shared/const/backendUrl';
import { avatarPlaceholderSmall } from '@/shared/const/avatarPlaceholderSmall';
import { UserCard } from '../UserCard/UserCard';
import { User } from '../../model/types/user';

interface IProps {
    users: User[]
    className?: string
    marginBottom?: string
}


export const UserBanner: React.FunctionComponent<IProps> = ({
    users,
    className,
    marginBottom
}) => {

    return (
        <BannerSwiper marginBottom={marginBottom}  className={className}>
            {users.map(u => (
                <UserCard 
                    href={`/users/${u.adress}`}
                    image_src={u.picture_source.small ? (backendUrl + '/' + u.picture_source.small) : avatarPlaceholderSmall} 
                    name={u.name}
                    variant={'column'}
                    key={u.id}
                />
            ))}
        </BannerSwiper>
    );
};
