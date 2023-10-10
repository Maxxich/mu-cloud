import { BannerSwiper } from '@/shared/ui/BannerSwiper';
import { UserCard } from '../UserCard/UserCard';
import { User } from '../../model/types/user';

interface IProps {
    users: User[]
    className?: string
    isMobile: boolean
}


export const UserBanner: React.FunctionComponent<IProps> = ({
    users,
    className,
    isMobile
}) => {

    return (
        <BannerSwiper  className={className} isMobile={isMobile}>
            {users.map(u => (
                <UserCard 
                    href={`/users/${u.adress}`}
                    image_src={u.picture_source.small} 
                    name={u.name}
                    variant={'column'}
                    key={u.id}
                />
            ))}
        </BannerSwiper>
    );
};
